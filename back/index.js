const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const hpp = require('hpp');
const helmet = require('helmet');

const postAPIRouter = require('./routes/post');

const prod = process.env.NODE_ENV === 'production';
dotenv.config();
const app = express();

if (prod) {
  app.use(hpp());
  app.use(helmet());
  app.use(morgan('combined'));
  app.use(
    cors({
      origin: /nodebird\.com$/,
      credentials: true,
    }),
  );
} else {
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.get('/', (req, res) => {
  res.send('react nodebird 백엔드 정상 동작!');
});

// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
app.use('/api/post', postAPIRouter);

app.listen(prod ? process.env.PORT : 3065, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
