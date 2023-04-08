const link=encodeURI(window.location.href);
const msg=encodeURIComponent("Hey, check this profile...")
const title=encodeURIComponent(document.querySelector('title').textContent)
const twitter=document.querySelector('.twitter');
const linkedin=document.querySelector('.linkedin');
const pinterest=document.querySelector('.pinterest');
const facebook=document.querySelector('.facebook');
twitter.href=`https://twitter.com/intent/tweet?url=${link}&text=${msg}`;
twitter.target='_blank';
linkedin.href=`https://www.linkedin.com/sharing/share-offsite/?url=${link}`;
linkedin.target='_blank';
pinterest.href=` http://pinterest.com/pin/create/button/?url=${link}`;
pinterest.target='_blank';
facebook.href=`https://www.facebook.com/sharer.php?u=${link}`;
facebook.target='_blank';