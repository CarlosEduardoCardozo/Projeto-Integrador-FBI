<script setup></script>

<template>
  <div class="bemvindo">
    <span>BEM VINDO(A) A NOSSA ÁREA DAS PESSOAS MAIS PROCURADAS PELO FBI</span>
    <router-link class="btnenter" to="/list"
      ><button>Acesse a lista</button></router-link
    >
  </div>
</template>
<style>
.bemvindo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
  color: #0a0a12;
  font-size: 1.8rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-bottom: 22%;
}

.bemvindo button {
  padding: 15px;
  border-radius: 25px;
  text-decoration: none;
  border: none;
  min-width: 140px;
  cursor: pointer;
  background-color: #0a0a12;
  margin-top: 15px;
}
.btnenter a {
  color: #fff;
}
.btnenter button {
  color: #fff;
}
.btnenter button:hover {
  background-color: #282829;
}

@media (max-width: 480px) {
  header {
    width: 100%;
    padding: 3px;
  }
  .pessoasproc{
    display: none;
  }
  .submit-line{
    display: none;
  }
  .fontlogo{
    font-size: 42px;
    padding: 0;
  }
  .bemvindo{
    font-size: 160%;
    width: 335px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 15rem;
  }
  .rodapeforget{
    width: 100vw;
    position: relative;
    margin-top: 353px;
    bottom: 0;
    
  }
  .rodape{
    bottom: 0;
    position: relative;
    background-color: #0a0a12;
    width: 100vw;
    margin: 0;
    
  }
  .logofbi{
    width: 62px;
    height: 62px;
    margin-left: -2px;
    margin-right: 15px;
  }
  .right{
   width: 50px;
} 
.socialmedia ul{
  position: fixed;
  flex-direction: column;
  margin-left: 0px;
  width: 0px;
  height: 0x;
}
.socialmedia ul li{
 height: 20px; 
}
.socialmedia ul li img{
  width: 20px;
  height: 15px;
} 
.agency{
    font-size: 10px;
    margin-left: -20px;
  }
  .agencycontact{
    width: 80px;
    margin-left: -90px;
    font-size: 15px;
  }
}
</style>
