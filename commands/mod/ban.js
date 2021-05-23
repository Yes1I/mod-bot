module.exports = {
    commands: 'ban', 
    description: 'Bans A User.', 
    permissions: 'BAN_MEMBERS',
    permissionError: 'You Dont Have Perms To Ban Someone',

    callback: (message, args) => {
              const member = message.mentions.members.first()
        if(!member) return message.reply('Mention a member') 
        if (member === message.member) return message.reply('You cannot ban yourself bruh'); 
        if (member.roles.highest.position >= message.member.roles.highest.position) 
        return message.reply('Not allowed to ban someone with a role higher or equal to ya');
        if (member.ban()) return message.reply(`Yoooo I have banned <@${member.user.id}>, if you want to unban them, go to this link :- https://gametechia.com/how-to-unban-someone-on-discord/ or just use the unban command (Banning is kinda dangurous)`)
    }
}
