module.exports = {
    commands: 'unban',
    description: 'UNBANS DUH',
    permissions: 'BAN_MEMBERS',
    permissionError: 'You can\'t use this',

    callback: (message, args) => {

        const userID = args[0]
        if(!userID) return message.reply('Give the user\'s ID!')


        message.guild.fetchBans().then(bans => {
            if(bans.size == 0) return
            let bannedUser = bans.find(b => b.user.id == userID)

            if(bannedUser)return message.reply(`Unbanned <@${userID}>!`) 
               (message.guild.members.unban(bannedUser.user))
                else {message.channel.send(`👍 Unbanned <@${userID}>`).then(message.guild.members.unban(bannedUser.user))
            } else {
                message.reply('That... is not a valid user ID, They might not be banned.')
            }
        })


    }
}
