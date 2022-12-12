<template>
  <div class="img">
    <img class="imagemcardozo" src="@/img/cardozo.jpeg" alt="" />
  </div>
  <div class="infos">
    <h2 class="name">Carlos Eduardo Cardozo Gums</h2>
    <p class="desc">
      Procurado por roubar o coração de uma gatinha, além disto por amar demais a Isabelli Mileni Bento
    </p>
  </div>
  <div class="info2">
    <h2>Raça</h2>
    <p>Branco</p>
    <h2>Cabelo</h2>
    <p>Preto</p>
    <h2>Cor dos olhos</h2>
    <p>Castanho escuro</p>
    <h2>Sexo</h2>
    <p>Masculino</p>
    <h2>Peso</h2>
    <p>72kg</p>
    <h2>Data de nascimento</h2>
    <p>11/06/2005</p>
  </div>
</template>
<style scoped>
.img img {
  width: 60%;
  width: 240px;
  /* padding: 15px; */
  margin-right: -120px;
  border-radius: 20px;
  box-shadow: 0 0 15px 0 #000;
}
.infos h2 {
  width: 80%;
  color: #b68d4a;
}
.info2 {
  margin: 10% 0 0 -44%;
  color: white;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 24%;
  flex-direction: column;
  padding: 24px;
}
.info2 h2 {
  color: #b68d4a;
}
.desc {
  padding: 10px;
}
@media (max-width: 480px) {
  .infos{
    position: absolute;
    height: 240px;
    top: 420px;
    width: 80%;
    left: 20px;

  }
  .info2{
    position:absolute;
    top: 500px;
    right: 120px;
    font-size: 13px;
    height: 130px;
    margin-right: 40px;
    }
    .img{
      width: 380px;
      height: 320px;
      margin-left: -30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .info2 p{
      margin-left: 24px;
    }
    .info2 h2{
      margin-left: 24px;
    }
    .name{
      font-size: 18px;
    }
    .desc{
      font-size: 13px;
    }


}
</style>
