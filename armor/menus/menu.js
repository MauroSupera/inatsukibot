const menu2 = (NomeDoBot, tempo, sender, NickDono, hora, prefix, pushname) => {

// NÃO APAGUE ESSE ${Prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 
┏│ ⛧⛧⛧⛧⛧⛧⛧
┃│ ʙᴏᴛ ➢ ${NomeDoBot}
┃│ ${tempo} ⟷ @${sender.split(`@`)[0]}
┃│ ᴅᴏɴᴏ ➢ ${NickDono}
┃│ ʜᴏʀᴀ ➢ ${hora}
┗ ───────────────────
╰═• ⛧  ⛧  ⛧  ⛧  ⛧ •═╯
╭︎⊰ ⛧  ⛧  ⛧  ⛧  ⛧ ⊱╮︎    
╎ 💎 × 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋 × 💎
╰═• ⛧  ⛧  ⛧  ⛧  ⛧ •═╯
┃│
┏━━━━━━━━━━━━━━━━━━━━━━━━
╎✰ۣۜۜ͜͡✨ ➠ ${prefix}MenuPremium
╎✰ۣۜۜ͜͡✨ ➠ ${prefix}MenuAlteradores
╎✰ۣۜۜ͜͡✨ ➠ ${prefix}MenuBrincadeiras
╎✰ۣۜۜ͜͡✨ ➠ ${prefix}EfeitosImg
╎✰ۣۜۜ͜͡✨ ➠ ${prefix}MenuSticker
╎✰ۣۜۜ͜͡✨ ➠ ${prefix}MenuAdm
╎✰ۣۜۜ͜͡✨ ➠ ${prefix}MenuLogos
╎✰ۣۜۜ͜͡✨ ➠ ${prefix}MenuAnimes
╎✰ۣۜۜ͜͡✨ ➠ ${prefix}MenuDono
╎✰ۣۜۜ͜͡✨ ➠ ${prefix}Wame
╎✰ۣۜۜ͜͡✨ ➠ ${prefix}Avalie
╎✰ۣۜۜ͜͡✨ ➠ ${prefix}Sugestão 
╎✰ۣۜۜ͜͡✨ ➠ ${prefix}Bug
║
┏━━━━━━━━━━━━━━━━━━━
┃⛧│ ➥ 「 DOWNLOAD/BAIXAR/PESQUISA 」
┗━━━━━━━━━━━━━━━━━━━
║
╎✰ۣۜۜ͜͡💎 ➠ ${prefix}Pesquisar 
╎✰ۣۜۜ͜͡💎 ➠ ${prefix}Play
╎✰ۣۜۜ͜͡💎 ➠ ${prefix}PlayMix
╎✰ۣۜۜ͜͡💎 ➠ ${prefix}PlayDoc
╎✰ۣۜۜ͜͡💎 ➠ ${prefix}Tiktok
╎✰ۣۜۜ͜͡💎 ➠ ${prefix}Instagram 
╎✰ۣۜۜ͜͡💎 ➠ ${prefix}Facebook 
║
┏━━━━━━━━━━━━━━━━━━━━━
┃❖│ ➡ 「 ADMINS/ADMINISTRAÇÃO 」
┗━━━━━━━━━━━━━━━━━━━━━
║
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}AutoSticker [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}AntiDoc [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}AntiFake [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}AntiLink [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}AntiLoc [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}AntiLinkHard [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}AntiCtt [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}AntiVideo [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}AntiImg [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}AntiSticker [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}AntiCatalogo [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}Anagrama [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}Nsfw [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}Leveling [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}AutoRespo [1-0]
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}Abrirgp
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}Fechargp
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}Legendabv2
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}Legendasaiu2
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}Bemvindo2
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}Novolink
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}Infogp
╎✰ۣۜۜ͜͡⚡ ➠ ${prefix}Grupo [F-A]
║
┏━━━━━━━━━━━━━━━━━━━━━━
┃❖│ ➡ 「 BRINCADEIRAS/GAMES 」
┗━━━━━━━━━━━━━━━━━━━━━━
║
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}JogoDaForca
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Rv
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Forca
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}JogoDaVelha
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Jogar [@]
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Shipo
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Gay [@]
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Pau
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Gay1
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Gadometro
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Chance (Texto)
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Cassino
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Casal
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Shipo
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Alma-Gemeas
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Duelo
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Gay
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Feio
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Matar
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Vesgo
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Bebado
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Gado
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Gostoso
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Gostosa
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Beijo
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Tapa
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Chutar
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Dogolpe
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Nazista
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Rankgay
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Rankgado
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Rankcorno
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Rankgostosos
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Rankgostosas
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Ranknazista
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Rankotakus
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Rankpau
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Quando
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Calculadora
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Mercadolivre
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Amazon
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Cep
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Filme
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Dolar
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Contar
╎✰ۣۜۜ͜͡🍭 ➠ ${prefix}Playstore  
┗━━━━━━━━━━━━━━━━━━━━━━`
}

exports.menu2 = menu2
