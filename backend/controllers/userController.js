const registerUser = (req, res) => {
  res.status(200).json({ hey_gay: "I'm still here bitch!!" })
}

const loginUser = (req, res) => {
  res.status(200).json({ hey_faggot: 'u gay - loginUser' })
}

const getMe = (req, res) => {
  res.status(200).json({ hey_gay: 'u mega gay - get?me' })
}

module.exports = {
  registerUser,
  loginUser,
  getMe
}
