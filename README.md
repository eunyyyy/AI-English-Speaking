# Daily English · 매일 한 걸음

모바일 우선 영어 학습 웹앱입니다.

- **15,000개 어휘**: 난이도별 학습, 뜻·품사·IPA, 저장·오답 기록
- **문장·표현 학습**: CEFR 단계별 예문, 발음 듣기/말하기, 한국어 이디엄·구동사
- **학습과 퀴즈 분리**: 플래시카드 복습 후 객관식 퀴즈로 확인
- **Firebase**: 이메일 가입·로그인, 이메일 인증, 비밀번호 재설정, UID별 Firestore 동기화
- **모바일 UI**: 하단 내비게이션, 본문 16px, 작은 글자 최소 14px

## 실행

루트에서 `python3 -m http.server 8765 --directory app` 실행 후 `http://localhost:8765`를 엽니다. 배포 주소: https://eunyyyy.github.io/AI-English-Speaking/

## 데이터와 라이선스

원본은 `data/`, 브라우저 번들은 `app/data/`에 둡니다. Open English-Korean Dictionary 기반 어휘 15,000개(CC BY-SA 4.0), 한국어 뜻이 포함된 이디엄 1,829개·구동사 1,211개(tema4p, CC BY-NC 4.0), 자체 작성 예문 24개를 제공합니다. 출처와 사용 조건은 `app/data/VOCABULARY_SOURCES.md`, `app/data/VOCABULARY_CREDITS.md`, `data/attributions.json`에 있습니다. 사전의 CEFR 라벨과 빈도 기반 수준은 학습용 추정치이며 공식 시험 등급이 아닙니다.

## Firebase와 데이터 이전

프로젝트 `daily-english-7fed4`의 이메일/비밀번호 인증 및 `eunyyyy.github.io` 승인 도메인을 설정했습니다. Firestore 규칙은 `data/firestore.rules`에 있으며 사용자 본인의 UID 경로만 접근할 수 있습니다. 공개 클라이언트 설정만 포함하고 서버 비밀키는 저장하지 않습니다. 기존 브라우저 학습 자료는 로그인 후 마이페이지의 JSON 가져오기로 옮길 수 있습니다. 비밀번호는 보안상 이전하지 않습니다. 개인 백업은 `backups/` 아래 보관하며 공개 Git에는 포함하지 않습니다.
