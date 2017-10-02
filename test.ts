input.onButtonPressed(Button.A, () => {
    powerfunctions.float(PowerFunctionsMotor.Blue1)
})

input.onButtonPressed(Button.B, () => {
    powerfunctions.setSpeed(PowerFunctionsMotor.Blue1, 2)
})

basic.forever(() => {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    if (input.lightLevel() > 200) {
        powerfunctions.float(PowerFunctionsMotor.Blue1)
        basic.pause(5000)
        powerfunctions.setSpeed(PowerFunctionsMotor.Blue1, 2)
        basic.pause(2000)
    }
})

powerfunctions.runTests()
basic.showIcon(IconNames.Heart)
powerfunctions.useIrLedPin(AnalogPin.P0)
powerfunctions.setMotorDirection(PowerFunctionsMotor.Blue1, PowerFunctionsDirection.Backward)
