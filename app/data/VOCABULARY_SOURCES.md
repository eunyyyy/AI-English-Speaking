# Vocabulary data and attribution

`vocabulary.json` contains 15,000 English headwords with Korean glosses, part of speech, IPA where available, and a study-level estimate. It is based on the **Open English-Korean Dictionary** by jhseo1211 / LexiSnap: <https://github.com/jhseo1211/open-english-korean-dict> (CC BY-SA 4.0). That project reports upstream contributions from kengdic, cc-kedict, ipa-dict, CMU Pronouncing Dictionary, CEFR-J, NGSL, and NAWL; see its `CREDITS.md` and README for source-specific terms.

This app filters headwords and keeps English headword, Korean meaning, part of speech, IPA, and frequency rank, then derives its own `cefr` study band from frequency-rank cutoffs: <=1,000 A1, <=2,500 A2, <=6,000 B1, <=12,000 B2, <=22,000 C1, and above C1 C2. These are **app study bands**, not official Cambridge, Oxford, IELTS, TOEIC Speaking or CEFR certifications. The headword order draws on frequency and the upstream list includes CEFR-J/NGSL/NAWL sourced vocabulary; no proprietary Cambridge/Oxford word list or copied test item is included.

The adapted dictionary data remains available under CC BY-SA 4.0. Attribution: “Open English-Korean Dictionary, jhseo1211 / LexiSnap, adapted for Daily English.” License: <https://creativecommons.org/licenses/by-sa/4.0/>. See the upstream repository for full upstream attribution and license notices.
