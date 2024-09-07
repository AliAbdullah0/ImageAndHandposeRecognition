export const DrawHand = (prediction, ctx) => {
    prediction.forEach(prediction => {
        const landmarks = prediction.landmarks
        for (let i = 0; i < landmarks.length; i++) {
            const x = landmarks[i][0]
            const y = landmarks[i][1]

            ctx.beginPath()
            ctx.arc(x, y, 5, 4, 3 * Math.PI)
            ctx.fillStyle = 'aqua'
            ctx.fill()

        }
    })
}