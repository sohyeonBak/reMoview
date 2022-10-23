const express = require('express');
const db = require('./models');
const app = express();

const cardsRouter = require('./routes/cards');
// const cardRouter = require('./routes/card');
// const userRouter = require('./routes/user');

db.sequelize.sync()
  .then(() => {
    console.log("db 연결 성공")
  })
  .catch(console.error)


app.get('/', (req, res) => {
  res.send('hello express');
});

app.use('/cards', cardsRouter);
// app.use('/card', cardRouter);
// app.use('/user', userRouter);

app.listen(3065, () => {
  console.log('서버 실행 중!!')
})