<template>
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
font-family: "Poppins", sans-serif;
}

.qr-img {
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
display: flex;
}
.mobile-only {
display: none;
}

.desktop-only {
display: block;
}
@media (max-width: 600px) {

.mobile-only {
    display: block;
}

.desktop-only {
    display: none;
}
}
</style>
