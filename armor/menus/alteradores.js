const alteradores = (NomeDoBot, tempo, sender, NickDono, hora, Prefix, pushname) => {

// NÃO APAGUE ESSE ${Prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return`
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 
┏│ ⛧⛧⛧⛧⛧⛧⛧
┃│ ʙᴏᴛ ➢ ${NomeDoBot}
┃│ ${tempo} ⟷ ${sender.split('@')[0]}
┃│ ᴅᴏɴᴏ ➢ ${NickDono}
┃│ ʜᴏʀᴀ ➢ ${hora}
┗ ───────────────────
╰═• ⛧  ⛧  ⛧  ⛧  ⛧ •═╯
╭︎⊰ ⛧  ⛧  ⛧  ⛧  ⛧ ⊱╮︎    
╎ 💎 × ALTERADORES × 💎
╰═• ⛧  ⛧  ⛧  ⛧  ⛧ •═╯
┃│
┏━━━━━━━━━━━━━━━━━━━━━━━━
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Audiolento
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Esquilo
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Audiorapido
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Faustao 
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Patolino
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Chapolin
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Eminem
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Ibere
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Estourado2
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Estourado
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Bass
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Bass2
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Bass3
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Grave2
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Grave
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Vozmenino
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Deep
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Fat
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Reverse
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Tomp3
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Videocontrario
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Videolento
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Videorapido
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Imgpralink
╎✰ۣۜۜ͜͡🥂 ➠ ${Prefix}Videopralink
┗━━━━━━━━━━━━━━━━━━━━━`
}

exports.alteradores = alteradores