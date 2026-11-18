# Daily English 앱 개발·운영

## 로컬 실행

프로젝트 루트에서 `python3 -m http.server 8765 --directory app` 실행 후 `http://localhost:8765`로 접속합니다. Firebase SDK는 브라우저에서 로드되므로 인증·동기화에는 인터넷 연결이 필요합니다.

## 학습 데이터

- `data/word-bank.json`: 어휘 15,000개 원본
- `data/idioms.json`: 한국어 뜻이 있는 이디엄 1,829개
- `data/phrasal-verbs.json`: 한국어 뜻이 있는 구동사 1,211개
- `app/data/word-bank.js`, `expressions.js`: 웹 번들
- `app/data/sentences.js`: CEFR 단계별 자체 작성 예문 24개
- `data/attributions.json`: 출처·라이선스

사전 데이터는 CC BY-SA 4.0, 이디엄·구동사 데이터는 CC BY-NC 4.0으로 무료 학습 앱에 사용합니다. 상세 고지는 `app/data/VOCABULARY_SOURCES.md`와 `VOCABULARY_CREDITS.md`를 확인하세요. CEFR 분류는 빈도/커뮤니티 메타데이터를 기반으로 한 학습용 추정값입니다.

## Firebase 저장

프로젝트 ID `daily-english-7fed4`; 이메일/비밀번호 인증, `eunyyyy.github.io` 승인 도메인, Firestore UID 전용 규칙을 사용합니다. 상태 문서는 `users/{uid}/private/state`입니다. 기존 로컬 자료는 마이페이지에서 JSON 백업을 가져와 로그인 계정에 저장할 수 있습니다. 공개 `firebase-config.js`에는 브라우저용 프로젝트 설정만 포함합니다.

## 배포

GitHub 저장소 `eunyyyy/AI-English-Speaking`의 `main` 업데이트는 GitHub Pages에 배포됩니다. 개인 백업과 인증정보는 공개 저장소에 포함하지 않습니다.
