/* ========================= */
/* UPDATED style.css */
/* ========================= */

:root{

    --bg:#050816;
    --card:#111827;
    --accent:#00f5c3;
    --text:#ffffff;
    --muted:#94a3b8;

}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;
    font-family:'Outfit',sans-serif;
}

body{
    background:var(--bg);
    color:var(--text);
    overflow-x:hidden;
}

/* BACKGROUND */

.bg-animation{
    position:fixed;
    width:500px;
    height:500px;
    background:rgba(0,245,195,0.08);
    border-radius:50%;
    filter:blur(120px);
    top:-150px;
    right:-150px;
    z-index:-1;
}

/* NAVBAR */

.navbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    position:sticky;
    top:0;
    backdrop-filter:blur(10px);
    background:rgba(5,8,22,0.7);
    z-index:1000;
    border-bottom:1px solid rgba(255,255,255,0.08);
}

.logo{
    font-size:2rem;
    font-weight:800;
}

.logo span{
    color:var(--accent);
}

.nav-links{
    display:flex;
    gap:30px;
    align-items:center;
}

.nav-links a{
    color:var(--muted);
    transition:0.3s;
}

.nav-links a:hover{
    color:var(--accent);
}

.btn-nav{
    border:1px solid var(--accent);
    padding:10px 20px;
    border-radius:50px;
}

.hamburger{
    display:none;
    cursor:pointer;
}

.line{
    width:25px;
    height:3px;
    background:white;
    margin:5px;
}

/* HERO */

header{
    min-height:100vh;
    display:flex;
    align-items:center;
}

.hero-container{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:50px;
    padding:0 8%;
}

.greeting{
    color:var(--accent);
    letter-spacing:2px;
    margin-bottom:15px;
}

.hero-text h1{
    font-size:5rem;
    line-height:1;
}

.hero-text h2{
    margin-top:15px;
    font-size:2rem;
    color:var(--muted);
}

.typing-text{
    color:var(--accent);
}

.sub-text{
    margin-top:20px;
    max-width:550px;
    color:var(--muted);
    line-height:1.8;
}

.buttons{
    margin-top:35px;
    display:flex;
    gap:20px;
}

/* BUTTONS */

.btn-primary{
    background:linear-gradient(135deg,#00f5c3,#00b3ff);
    padding:14px 30px;
    border-radius:50px;
    color:black;
    font-weight:700;
    transition:0.4s;
}

.btn-primary:hover{
    transform:translateY(-5px);
}

.btn-secondary{
    border:1px solid rgba(255,255,255,0.15);
    padding:14px 30px;
    border-radius:50px;
}

.btn-secondary:hover{
    border-color:var(--accent);
    color:var(--accent);
}

/* HERO CIRCLE */

.hero-circle{
    position:relative;
}

.circle-glow{
    width:350px;
    height:350px;
    border-radius:50%;
    background:linear-gradient(135deg,#00f5c3,#00b3ff);
    filter:blur(70px);
    opacity:0.5;
    animation:float 4s ease-in-out infinite;
}

.circle-content{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:250px;
    height:250px;
    border-radius:50%;
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.08);
    display:flex;
    justify-content:center;
    align-items:center;
    backdrop-filter:blur(20px);
}

.circle-content i{
    font-size:6rem;
    color:var(--accent);
}

@keyframes float{

    0%{
        transform:translateY(0px);
    }

    50%{
        transform:translateY(-20px);
    }

    100%{
        transform:translateY(0px);
    }

}

/* SECTION */

.section{
    padding:100px 8%;
}

.bg-darker{
    background:#0b1120;
}

.section-heading{
    font-size:2.5rem;
    margin-bottom:50px;
    position:relative;
}

.section-heading::after{
    content:"";
    width:80px;
    height:4px;
    background:var(--accent);
    position:absolute;
    bottom:-10px;
    left:0;
}

/* ABOUT */

.about-box{
    background:rgba(255,255,255,0.03);
    border:1px solid rgba(255,255,255,0.08);
    padding:40px;
    border-radius:25px;
    backdrop-filter:blur(12px);
    color:var(--muted);
    line-height:1.9;
}

/* SKILLS */

.skills-wrapper{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
}

.skill-card{
    background:rgba(255,255,255,0.03);
    padding:35px;
    border-radius:25px;
    text-align:center;
    transition:0.4s;
    border:1px solid rgba(255,255,255,0.08);
}

.skill-card:hover{
    transform:translateY(-10px);
    box-shadow:0 0 25px rgba(0,245,195,0.15);
}

.skill-card i{
    font-size:3rem;
    color:var(--accent);
    margin-bottom:20px;
}

.skill-card p{
    color:var(--muted);
    margin-top:10px;
}

/* PROJECTS */

.projects-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:30px;
}

.project-card{
    background:rgba(255,255,255,0.03);
    border:1px solid rgba(255,255,255,0.08);
    padding:35px;
    border-radius:25px;
    transition:0.4s;
}

.project-card:hover{
    transform:translateY(-10px);
    box-shadow:0 0 25px rgba(0,245,195,0.15);
}

.card-header{
    display:flex;
    justify-content:space-between;
    font-size:1.6rem;
    color:var(--accent);
    margin-bottom:20px;
}

.project-card p{
    color:var(--muted);
    line-height:1.7;
    margin:20px 0;
}

.tags span{
    background:rgba(0,245,195,0.08);
    color:var(--accent);
    padding:8px 14px;
    border-radius:30px;
    margin-right:10px;
    font-size:0.8rem;
}

/* CONTACT */

.center-text{
    text-align:center;
}

.big-btn{
    display:inline-block;
    margin-top:30px;
}

.socials{
    margin-top:40px;
    display:flex;
    justify-content:center;
    gap:20px;
}

.socials a{
    width:50px;
    height:50px;
    background:rgba(255,255,255,0.05);
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:0.3s;
}

.socials a:hover{
    background:var(--accent);
    color:black;
}

/* FOOTER */

footer{
    text-align:center;
    padding:30px;
    color:var(--muted);
}

/* MOBILE */

@media(max-width:900px){

    .hero-container{
        flex-direction:column;
        text-align:center;
        padding-top:100px;
    }

    .hero-text h1{
        font-size:3rem;
    }

    .hero-text h2{
        font-size:1.5rem;
    }

    .buttons{
        justify-content:center;
        flex-wrap:wrap;
    }

    .circle-glow{
        width:250px;
        height:250px;
    }

    .circle-content{
        width:180px;
        height:180px;
    }

    .nav-links{
        display:none;
        position:absolute;
        top:80px;
        right:0;
        width:100%;
        background:#050816;
        flex-direction:column;
        padding:20px;
    }

    .nav-links.active{
        display:flex;
    }

    .hamburger{
        display:block;
    }

}
