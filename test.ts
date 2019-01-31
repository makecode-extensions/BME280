let temperature = 0
let humidity = 0
let pressure = 0
basic.forever(() => {
    pressure = BME280.pressure()
    humidity = BME280.humidity()
    temperature = BME280.temperature()
    serial.writeValue("P", pressure)
    serial.writeValue("H", humidity)
    serial.writeValue("T", temperature)
    basic.pause(1000)
})
