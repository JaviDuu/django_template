document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("registerForm"),t=document.getElementById("email-field"),s=document.getElementById("username-field"),d=document.getElementById("password"),r=document.getElementById("email-error"),n=document.getElementById("username-error"),a=document.getElementById("password-error"),o=document.getElementById("password-suggestion");e.addEventListener("submit",(function(e){let i=!0;var l,m;t.classList.remove("error"),s.classList.remove("error"),d.classList.remove("error"),r.classList.add("hidden"),n.classList.add("hidden"),a.classList.add("hidden"),l=t.value,/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)||(t.classList.add("error"),r.classList.remove("hidden"),i=!1),s.value.trim()||(s.classList.add("error"),n.classList.remove("hidden"),i=!1),(d.value.length<8||(m=d.value,!/[a-zA-Z]/.test(m)||!/\d/.test(m)))&&(d.classList.add("error"),a.classList.remove("hidden"),o.classList.remove("hidden"),i=!1),i||e.preventDefault()}))}));