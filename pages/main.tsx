import React, { useEffect, useState } from "react";
import { ChakraProvider, Box, Button, Flex, Image, Text, Spacer } from "@chakra-ui/react";
import { StlViewer } from 'react-stl-viewer';


const MainPage = (deep) => {    
  const [selectedItem, setSelectedItem] = useState<{[key:string]:string}>({});
  const [isOpen, setIsOpen] = useState<{[key:string]:boolean}>({});

  const handleSelect = (key:string, value:string) => {
    setSelectedItem(prevState => ({
      ...prevState,
      [key]: value
  }))
    setIsOpen(prevState => ({
      ...prevState,
      [key]: false
  }))}

  const toggleDropdown = (key:string) => {
    setIsOpen(prevState => ({
      ...prevState,
      [key]:!prevState[key]
  }))}

  const _options = {
    _models: [
      'Boat.stl',
    ],
    _technology: [
      "FDM (Fused Deposition Modeling)",
      "SLA (Stereolithography)",
      "DLP (Digital Light Processing)",
      "SLS (Selective Laser Sintering)",
      "SLM (Selective Laser Melting)",
      "EBM (Electron Beam Melting)",
      "Material Jetting",
      "DOD (Drop On Demand)",
      "Binder Jetting",
      "MJF (Multi Jet Fusion)"
    ],
    _materials: [
      'ABC',
      'PLA',
      'PET',
      'Nylon',
      'ASA',
      'PP',
      'PVA',
      'HIPS',
    ],
    _colors: [
      'Черный',
      'Серый',
      'Белый',
      'Металл',
      'Хром',
      'Зелёный',
      'Синий',
      'Красный',
      'Желтый',
      'Голубой',
    ],
    _filling: [
      '99%',
      '80%',
      '70%',
      '60%',
      '55%',
      '50%',
      '45%',
      '40%',
      '35%',
      '30%',
      '25%',
    ],
    _quality: [
      'ultra (0.05mm)',
      'high (0.1mm)',
      'medium (0.2mm)',
      'low (0.4mm)',
    ]
  }


  const renderChoiceComp = (list: Array<string>, value: string, key: string) => (
    <Flex direction="row">
      <Box style={{ position: 'relative', width: '16vw', height: '2.5vw' }}>
        <Button onClick={() => toggleDropdown(key)}>
          {selectedItem[key] || "Выберите опцию"}
        </Button>
        {isOpen[key] && (
          <Box style={{ position: 'absolute', zIndex: 1000, background: '#DDDDDD', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '4px', width: '100%' }}>
            {list.map((value, index) => (
              <Box key={index} style={{ cursor: 'pointer' }} onClick={() => handleSelect(key, value)}>
                <Text fontSize="1.4vw" whiteSpace="nowrap"> {value} </Text>
              </Box>
            ))}
          </Box>
        )}
      </Box>
      <Spacer flex="0 1 3%"/>
      <Text fontSize="1.4vw" whiteSpace="nowrap" marginTop="0.1vw"> {value} </Text>
    </Flex>
  )


  return (
    <ChakraProvider>
      <Flex direction="column">
        <Flex direction="row">
          <Text fontSize="3.2vw" align="center" flex="0 1 100%" whiteSpace="nowrap"> Параметры печати </Text>
        </Flex>

        <Spacer h="0.5vw"/> 
        <Flex direction="row">

          {/* demo */}<>
          <Flex flex="0 1 45%">
            <Spacer flex="0 1 6%"/>
              <Flex direction="column" flex="0 1 85%">
                <StlViewer
                  url={"models/boat.stl"}
                  style={{ width:'37vw', height:'37vw' }} // @ts-ignore
                  modelColor='#FFFFFF'
                  backgroundColor='#EAEAEA'
                  rotate={true}
                  orbitControls={true}
                  flex="0 1 100%"
                />
              </Flex>
            <Spacer flex="0 1 9%"/>
          </Flex>
          </>

          <Flex direction="column" flex="0 1 47%">

            {/* initial */}<>
              <Spacer h="5vw"/>
              <Text fontSize="2.4vw" whiteSpace="nowrap"> Исходные данные </Text>
              {renderChoiceComp(_options._models, "Загрузите модель", "1")}
              {renderChoiceComp(_options._technology, "Выбрать технологию", "2")}
              <Text fontSize="1.4vw" whiteSpace="nowrap"> Выбрать материал </Text>
              <Text fontSize="1.4vw" whiteSpace="nowrap"> Выбрать цвет </Text>
              <Text fontSize="1.4vw" whiteSpace="nowrap"> Выбрать заполнение </Text>
              <Text fontSize="1.4vw" whiteSpace="nowrap"> Качество поверхности </Text>
              <Text fontSize="1.4vw" whiteSpace="nowrap"> Качество деталей </Text>
            </>

            {/* post */}<>
              <Spacer h="1vw"/>
              <Text fontSize="2.4vw" whiteSpace="nowrap"> Пост обработка </Text>
              <Text fontSize="1.4vw" whiteSpace="nowrap"> Сглаживаение следов печати </Text>
              <Flex direction="row">
                <Text fontSize="1.4vw" whiteSpace="nowrap"> Покраска </Text>
                <Spacer flex="0 1 5%"/>
                <Text fontSize="1.4vw" whiteSpace="nowrap"> Выбрать цвет: </Text>
                <Spacer flex="0 1 2%"/>
                <Box flex = '0 1 6%'><Image
                  src = "texture.avif"
                  borderRadius = '20%'
                  border = '0.2vw solid'
                  width = "100%"
                  maxWidth = '100%'
                  borderColor = 'gray.700'
                  backgroundColor = '#9da1af'/></Box>
                <Box flex = '0 1 6%'><Image
                  src = "texture.avif"
                  borderRadius = '20%'
                  border = '0.2vw solid'
                  width = "100%"
                  maxWidth = '100%'
                  borderColor = 'gray.700'
                  backgroundColor = '#9da1af'/></Box>
              </Flex>
            </>

            {/* result */}<>
              <Spacer h="1.5vw"/>
              <Flex direction="row">
                <Text fontSize="1.4vw" whiteSpace="nowrap" flex="0 1 45%"> Отправить на печать </Text>
                <Spacer flex="0 1 7%"/>
                <Text fontSize="1.4vw" whiteSpace="nowrap"> Сохранить в личном кабинете </Text>
              </Flex> 
            </>
          </Flex>
        </Flex> 

        <Spacer h="99vw"/> 
      </Flex>
    </ChakraProvider>
)}

export {MainPage};
