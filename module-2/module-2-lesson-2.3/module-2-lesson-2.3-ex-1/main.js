'use strict';

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/500/500";

const picture = document.querySelector('.user__avatar');

picture.src =  userAvatar || DEFAULT_AVATAR;

