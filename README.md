# AI 영어 웹앱 프로젝트

- 웹앱: `app/index.html`
- 학습 데이터: `data/word-bank.json`
- 실행/AI 연결 안내: `docs/README.md`

웹앱은 GitHub Pages에 공개 배포되어 있으며, 샘플 진단 기준 데이터와 앱 파일은 이 프로젝트 폴더에서 함께 버전 관리합니다. 계정 정보와 학습 기록은 현재 브라우저 로컬 저장 방식입니다. 다중 기기 계정 동기화는 인증/DB 백엔드 연결이 필요합니다.

## 업데이트 저장

수정은 이 외장하드 폴더에서 진행합니다. 변경 후 GitHub 저장소 `eunyyyy/AI-English-Speaking`에 커밋과 푸시를 반영해 버전을 함께 보관합니다. 저장소는 공개이며, `main` 브랜치 업데이트마다 GitHub Pages에 자동 배포됩니다.

## 계정 복구 및 저장 범위

마이페이지에서 표시 이름·복구 이메일·비밀번호를 관리합니다. 비밀번호 재설정 UI는 `/api/auth/password-reset/request` 및 `/api/auth/password-reset/confirm` API를 호출합니다. 현재 GitHub Pages 정적 배포에는 이 API가 없으므로 실제 이메일 발송과 재설정은 백엔드 배포 뒤 활성화됩니다. 화면은 서버 미연결 상태에서 발송 성공을 가장하지 않습니다.
