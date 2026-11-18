# Daily English 웹앱

## 실행

정적 파일 서버에서 실행하세요. 프로젝트 루트에서 `python3 -m http.server 8765 --directory app`를 실행한 뒤 `http://localhost:8765`를 엽니다. GitHub Pages 배포판은 https://eunyyyy.github.io/AI-English-Speaking/ 입니다.

## 학습 기능

- 자유 영어 대화: 주제 지문을 고르고 세 가지 예시 답변에서 선택해 대화를 시작합니다. 다음 질문마다 새 모범 답변 예시를 보여주고, 선택한 뒤에는 이전 예시를 접습니다.
- 상황극 대화, 음성 입력, AI 답변 음성 재생, 영어 문장 아래 한국어 번역 표시/숨김
- 흔한 문법·어휘 실수 및 입력한 기술 영역에 따른 피드백. 틀린 부분의 모범 표현과 설명을 복습 큐 마지막에 저장
- 종료 인식과 새 장면으로 다시 시작하기
- CEFR 기반 수준 진단: 설문, 어휘, 문법, 읽기, 쓰기, 듣기, 스피킹
- 결과에서 학습 난이도를 정하고, 마이페이지에서 결과 히스토리 확인 또는 재진단
- 단어장/플래시카드/퀴즈, 오답 단어 저장, 사용자가 추가한 단어

## 시험 기준 참고 및 데이터

`data/assessment-frameworks.json`은 체계 이름, 적용 기술, 공식 공개 출처 URL을 정리합니다. 앱에서 쓰는 샘플 단어·진단 문항은 자체 작성한 연습용 예시이며 공식 시험 문항 또는 Oxford word list를 복제하지 않았습니다.

- Cambridge English CEFR: https://www.cambridgeenglish.org/exams-and-tests/cefr/
- Oxford Learner's Dictionaries CEFR word lists: https://www.oxfordlearnersdictionaries.com/about/wordlists/cefr.html
- IELTS band scoring, Reading/Writing/Speaking criteria: https://www.ielts.org/take-a-test/your-results/ielts-scoring-in-detail
- TOEIC Speaking test format and 0–200 scale: https://www.ets.org/toeic/about/speaking-writing.html

앱의 IELTS band 및 TOEIC Speaking 값은 학습 난이도를 설명하기 위한 대략 환산으로, 공식 성적 예측이 아닙니다. 쓰기 답은 문장 길이·기본 형식으로 자동 추정하고, 발음·유창성은 공식 채점 수준으로 평가하지 않습니다.

## 계정과 저장 범위

현재 GitHub Pages는 서버가 없는 정적 배포라 회원가입/로그인은 **같은 브라우저 안의 로컬 계정 프로필**로 동작합니다. 비밀번호는 브라우저에서 PBKDF2 해시로 검증하지만, 이 기능은 서비스용 서버 인증이 아닙니다. 단어장·대화·진단 히스토리도 기기 브라우저의 `localStorage`에만 저장되어 다른 기기와 자동 동기화되지 않습니다. 브라우저 데이터를 지우면 복구할 수 없습니다.

실서비스 수준 회원가입, 안전한 인증, 계정 간 데이터 동기화가 필요하면 Supabase/Firebase 같은 인증 및 데이터베이스 백엔드를 연결해야 합니다. 공개 웹 코드에 비밀키나 서버 자격 증명을 넣지 마세요. AI 대화도 `/api/chat` 서버가 없을 때는 앱 내 샘플 답변을 사용합니다.

## 폴더

- `app/`: 웹앱 및 배포 정적 파일
- `app/data/assessment-frameworks.json`: 브라우저에서 불러오는 진단 체계 데이터
- `data/`: 정리용 원본 학습 데이터
- `docs/`: 실행과 기준 안내
