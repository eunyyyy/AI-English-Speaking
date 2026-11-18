(function(){
  const config=window.DAILY_ENGLISH_FIREBASE_CONFIG;
  if(!window.firebase||!config?.projectId){window.DailyEnglishCloud={ready:false};return}
  if(!firebase.apps.length)firebase.initializeApp(config);
  const auth=firebase.auth(),db=firebase.firestore();auth.languageCode='ko';
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(()=>{});
  const stateRef=uid=>db.collection('users').doc(uid).collection('private').doc('state');
  let saveTimer=null,pending=null;
  function saveState(uid,state){
    pending={uid,state:JSON.parse(JSON.stringify(state))};clearTimeout(saveTimer);
    saveTimer=setTimeout(async()=>{const job=pending;pending=null;if(!job)return;try{await stateRef(job.uid).set({payload:job.state,updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true})}catch(error){window.dispatchEvent(new CustomEvent('daily-english-cloud-error',{detail:error}))}},650);
  }
  window.DailyEnglishCloud={
    ready:true,auth,
    onAuthStateChanged(callback){return auth.onAuthStateChanged(callback)},
    signUp(email,password,name){return auth.createUserWithEmailAndPassword(email,password).then(async result=>{if(name)await result.user.updateProfile({displayName:name});await result.user.sendEmailVerification();return result.user})},
    signIn(email,password){return auth.signInWithEmailAndPassword(email,password).then(result=>result.user)},
    signOut(){return auth.signOut()},
    loadState:async uid=>{const snap=await stateRef(uid).get();return snap.exists?snap.data().payload||null:null},
    saveState,
    sendPasswordReset:email=>auth.sendPasswordResetEmail(email,{url:'https://eunyyyy.github.io/AI-English-Speaking/#mypage',handleCodeInApp:false}),
    updateProfile:async(user,name,newEmail)=>{if(name!==user.displayName)await user.updateProfile({displayName:name});if(newEmail&&newEmail.toLowerCase()!==user.email.toLowerCase()){if(typeof user.verifyBeforeUpdateEmail!=='function')throw new Error('이메일 변경은 최신 Firebase 설정에서 지원되지 않습니다.');await user.verifyBeforeUpdateEmail(newEmail,{url:'https://eunyyyy.github.io/AI-English-Speaking/#mypage',handleCodeInApp:false})}},
    changePassword:async(user,currentPassword,newPassword)=>{const credential=firebase.auth.EmailAuthProvider.credential(user.email,currentPassword);await user.reauthenticateWithCredential(credential);await user.updatePassword(newPassword)}
  };
})();
