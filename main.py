import discord
from discord.ext import commands
import asyncio

intents = discord.Intents.all()
bot = commands.Bot(".", intents=intents)
Token = "MTM2NTA5NTM0NzM4MjI1OTc3NA.GF3NUb.Eh4VELqxHWjO6XrtUwHH8dI-5fM7gnWrzF0d7c"


@bot.event
async def on_ready():
    print("Bot on")

@bot.command()
async def ola(ctx:commands.Context):
    nome = ctx.author.name
    await ctx.reply(f"Eae {nome}")


ID_CANAL_GATILHO = 1365104104111870042

ID_CATEGORIA_TEMP = 1365104208231010334

@bot.event
async def on_ready():
    print(f"Bot conectado como {bot.user}")

    guild = bot.guilds[0]  # ou use um ID fixo se preferir
    categoria = guild.get_channel(ID_CATEGORIA_TEMP)

    for canal in categoria.voice_channels:
        # Pula o canal AFK
        if canal.name.lower() == "afk":
            continue

        print(f"Recuperando canal temporário existente: {canal.name}")

        # Insere no dicionário (sem cargo ou dono porque não temos essa info diretamente)
        canais_temporarios[canal.id] = (None, None)

canais_temporarios = {}

@bot.event
async def on_voice_state_update(member, before, after):
    if after.channel and after.channel.id == ID_CANAL_GATILHO:
        guild = member.guild
        categoria = guild.get_channel(ID_CATEGORIA_TEMP)

        # 1. Criação do cargo personalizado
        cargo_nome = f"🔐 {member.display_name}"
        cargo = await guild.create_role(
            name=cargo_nome,
            permissions=discord.Permissions(
                connect=True,
                manage_channels=True,
                manage_roles=True,
                move_members=True,
                mute_members=True,
                deafen_members=True,
                priority_speaker=True,
                stream=True,
                view_channel=True
            )
        )

        # 2. Atribuir o cargo ao usuário
        await member.add_roles(cargo)

        # 3. Criar o canal com permissão exclusiva do cargo
        canal_temp = await guild.create_voice_channel(
            name=f"🔊 Sala de {member.display_name}",
            category=categoria,
            overwrites={
                guild.default_role: discord.PermissionOverwrite(connect=False),
                cargo: discord.PermissionOverwrite(
                    connect=True,
                    manage_channels=True,
                    manage_roles=True,
                    mute_members=True,
                    deafen_members=True,
                    move_members=True,
                    view_channel=True
                )
            }
        )

        # 4. Mover o usuário para a sala
        await member.move_to(canal_temp)

        # 5. Salvar dados para excluir depois
        canais_temporarios[canal_temp.id] = (member.id, cargo.id)

    # Verifica se o canal ficou vazio e remove
    if before.channel and before.channel.id in canais_temporarios:
        canal = before.channel
        await asyncio.sleep(5)
        if len(canal.members) == 0:
            _, cargo_id = canais_temporarios[canal.id]
            cargo = discord.utils.get(canal.guild.roles, id=cargo_id)
            if cargo:
                await cargo.delete()
            await canal.delete()
            del canais_temporarios[canal.id]

bot.run(Token)
