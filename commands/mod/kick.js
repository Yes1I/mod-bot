
module.exports = {
    commands: 'kick', // You Can Keep Any Name
    description: 'Kicks A User.', // Optional 
    permissions: 'KICK_MEMBERS', // You Can Keep Any Permissions
    permissionError: 'OI, YOU CANNOT KICK A PERSON',
  
    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('Mention a member extra') // Mention To Kick.
        if (member === message.member) return message.reply('You cannot kick yourself bruh'); 
        if (member.roles.highest.position >= message.member.roles.highest.position) 
        return message.reply('Not allowed to kick someone with a role higher or equal to ya');
        if (member.kick()) return message.reply(`I have kicked <@${member.user.id}>!`)
    }
}
