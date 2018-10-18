module.exports = (robot) => {
  robot.hear(/karma @?([\w,\-]+)/i, (res) => {
    name = res.match[1].trim()
      if(robot.brain.get(name)) {
          karma = robot.brain.get(name)
      } else {
          karma = 0
      }
    res.send(`Current karma for @${name}: ${karma}`)
  })

  robot.hear(/\@?([\w.\-]+) ?\+\+/i, (res) => {
    name = res.match[1].trim()
    if(robot.brain.get(name)){
      karma = robot.brain.get(name)
    } else {
      karma = 0
    }
    karma += 1

    robot.brain.set(name, karma)
    res.send(`Great job @${name} you now have ${karma} karma.`)
  })

  robot.hear(/\@?([\w.\-]+) ?\-\-/i, (res) => {
    name = res.match[1].trim()
    if(robot.brain.get(name)){
      karma = robot.brain.get(name)
    } else {
      karma = 0
    }
    karma -= 1

    robot.brain.set(name, karma)
    res.send(`Come on @${name} ... you now have ${karma} karma.`)
  })
}
