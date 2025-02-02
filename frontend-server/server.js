import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';

// 환경변수 로드
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS 설정
app.use(cors({
    origin: '*', // 모든 요청 허용 (보안이 필요하면 특정 도메인으로 제한)
    credentials: true,
}));

// 정적 파일 제공 (프론트엔드 파일 경로)
app.use(express.static(path.join(__dirname, 'm_html')));

// 모든 요청을 프론트엔드의 2_login.html로 라우팅
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'm_html', '2_login.html'));
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`✅ Frontend server is running on http://localhost:${PORT}`);
});

