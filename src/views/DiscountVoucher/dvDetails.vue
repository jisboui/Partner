<template>
  <div class="container">
    <div class="card">
      <div class="main">
        <div class="co-img">
          <img
            src="https://www.tunisietravail.net/uploads/2021/08/artfin-200x200.png"
            alt=""
          />
        </div>
        <div class="vertical"></div>
        <div class="content">
          <h2>Artfin Oriental épicé</h2>
          <h1>10% <span>Bon de réduction</span></h1>
          <p>Valable jusqu'au 30 avril 2025</p>
        </div>
      </div>
      <div class="copy-button">
        <input id="copyvalue" type="text" readonly value="QR code" />
        <button @click="copyIt()" class="copybtn">COPY</button>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "dvDetails",
  methods: {
    copyIt() {
      let copybtn = document.querySelector(".copybtn");
      let copyInput = document.querySelector("#copyvalue");

      copyInput.select();

      document.execCommand("copy");

      copybtn.textContent = "COPIED";
    },
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #6bcc8b;
}
.card {
  width: 500px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px 20px;
  position: relative;
}

.main,
.copy-button {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
}
.card::after {
  position: absolute;
  content: "";
  height: 40px;
  right: -20px;
  border-radius: 40px;
  z-index: 1;
  top: 70px;
  background-color: #6bcc8b;
  width: 40px;
}

.card::before {
  position: absolute;
  content: "";
  height: 40px;
  left: -20px;
  border-radius: 40px;
  z-index: 1;
  top: 70px;
  background-color: #6bcc8b;
  width: 40px;
}

.co-img img {
  width: 100px;
  height: 100px;
}
.vertical {
  border-left: 5px dotted black;
  height: 100px;
  position: absolute;
  left: 35%;
}

.content h1 {
  font-size: 35px;
  margin-left: -20px;
  color: #565656;
}

.content h1 span {
  font-size: 18px;
}
.content h2 {
  font-size: 18px;
  margin-left: -20px;
  color: #565656;
  text-transform: uppercase;
}

.content p {
  font-size: 16px;
  color: #696969;
  margin-left: -20px;
}

.copy-button {
  margin: 12px 0 -5px 0;
  height: 45px;
  border-radius: 4px;
  padding: 0 5px;
  border: 1px solid #e1e1e1;
}

.copy-button input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
}

.copy-button button {
  padding: 5px 20px;
  background-color: #6bcc8b;
  color: #fff;
  border: 1px solid transparent;
}

@media (max-width: 600px) {
  

  .content h1 {
    font-size: 25px; /* reduce the font size on small screens */
  }

  .content h2 {
    font-size: 14px; 
  }

  .content p {
    font-size: 12px; 
  }
}
</style>
