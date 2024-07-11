import React from 'react'
import {
    Box,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
  } from '@chakra-ui/react'

const steps = [
    { title: 'Primer', description: 'Carrito de Compras' },
    { title: 'Segundo', description: 'Datos de Contacto' },
    { title: 'Tercero', description: 'Confirmacion de Compra' },
]



const Steps = ({actualStep}) => {
    
  const { activeStep } = useSteps({
        index: actualStep,
        count: steps.length,
  })

  return (
    <Stepper index={activeStep}>
                {steps.map((step, index) => (
                    <Step key={activeStep}>
                    <StepIndicator>
                        <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                        />
                    </StepIndicator>

                    <Box flexShrink='0'>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                    </Box>

                    <StepSeparator />
                    </Step>
                ))}
    </Stepper>
  )
}

export default Steps