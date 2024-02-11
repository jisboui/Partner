<template>
  <div class="container">
    <div class="card">
      <div class="main">
        <div class="co-img">
          <img
            src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/273207779_281563397405455_6026609381950187436_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9WqjAmUBLWsAX_NkJM1&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfA6qhovC-bEm09eAmf_MAkl55ucOzLSyMlp98oO1cvDlw&oe=65C9F461"
            alt=""
          />
        </div>
        <div class="vertical"></div>
        <div class="content">
          <h2>Artfin Oriental épicé</h2>
          <h1>10% <span>Coupon</span></h1>
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
  <div class="desktop-only">
    <h1 style="text-align: center;">Passer à votre téléphone mobile pour utiliser le scanner QR code📱<br> et valider le bon de réduction pour les participants!</h1>
    <br>
    <img src="https://b2993016.smushcdn.com/2993016/wp-content/uploads/2023/04/Untitled-design-3.png?lossy=1&strip=1&webp=1" alt="qr code image" class="qr-img"/>
  </div>
  <div class="mobile-only">
    <p>
      Track function:
      <select v-model="selected">
        <option
          v-for="option in options"
          :key="option.text"
          :value="option"
        >
          {{ option.text }}
        </option>
      </select>
    </p>
    <qrcode-stream
      :track="selected.value"
      @error="logErrors"
    />
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
export default {
  name: "dvDetails",
  components: {
    QrcodeStream,
  },
  data() {
    
    const options = [
      { text: 'nothing (default)', value: undefined },
      { text: 'outline', value: this.paintOutline },
      { text: 'centered text', value: this.paintCenterText },
      { text: 'bounding box', value: this.paintBoundingBox }
    ]

    const selected = options[1]

    return { selected, options }
  },

  methods: {
    copyIt() {
      let copybtn = document.querySelector(".copybtn");
      let copyInput = document.querySelector("#copyvalue");

      copyInput.select();

      document.execCommand("copy");

      copybtn.textContent = "COPIED";
    },
    paintOutline(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const [firstPoint, ...otherPoints] = detectedCode.cornerPoints

        ctx.strokeStyle = 'red'

        ctx.beginPath()
        ctx.moveTo(firstPoint.x, firstPoint.y)
        for (const { x, y } of otherPoints) {
          ctx.lineTo(x, y)
        }
        ctx.lineTo(firstPoint.x, firstPoint.y)
        ctx.closePath()
        ctx.stroke()
      }
    },

    paintBoundingBox(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const {
          boundingBox: { x, y, width, height }
        } = detectedCode

        ctx.lineWidth = 2
        ctx.strokeStyle = '#007bff'
        ctx.strokeRect(x, y, width, height)
      }
    },

    paintCenterText(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const { boundingBox, rawValue } = detectedCode

        const centerX = boundingBox.x + boundingBox.width / 2
        const centerY = boundingBox.y + boundingBox.height / 2

        const fontSize = Math.max(12, (50 * boundingBox.width) / ctx.canvas.width)
        console.log(boundingBox.width, ctx.canvas.width)

        ctx.font = `bold ${fontSize}px sans-serif`
        ctx.textAlign = 'center'

        ctx.lineWidth = 3
        ctx.strokeStyle = '#35495e'
        ctx.strokeText(detectedCode.rawValue, centerX, centerY)

        ctx.fillStyle = '#5cb984'
        ctx.fillText(rawValue, centerX, centerY)
      }
    },

    logErrors: console.error
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
.qr-img {
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
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
.mobile-only {
  display: none;
}

.desktop-only {
  display: block;
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
  .mobile-only {
    display: block;
  }

  .desktop-only {
    display: none;
  }
}
</style>
