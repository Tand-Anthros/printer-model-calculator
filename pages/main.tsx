import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Button, Flex, Image, Text, Spacer, Checkbox, Divider, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import { StlViewer } from 'react-stl-viewer';


const MainPage = (deep) => {    
  const [selectedItem, setSelectedItem] = useState<{[key:string]:string}>({});
  const [isOpen, setIsOpen] = useState<{[key:string]:boolean}>({});

  const handleSelect = (key, value) => {
    setSelectedItem(prevState => ({
      ...prevState,
      [key]: value
  }))
    setIsOpen(prevState => ({
      ...prevState,
      [key]: false
  }))}

  const toggleDropdown = (key) => {
    setIsOpen(prevState => ({
      ...prevState,
      [key]:!prevState[key]
  }))}


  const _sx = {
    img_p: {
      borderRadius:'20%', 
      border:'0.2vw solid', 
      borderColor:'gray.700', 
      backgroundColor:'#9da1af'},
    tx: {
      fontSize:'1.4vw',
      whiteSpace:'nowrap',
      paddingX:'0.3vw',
      fontWeight:'430'},
  }

  const _options = {
    _models: [
      'Boat.stl'],
    _technology: [
      'FDM (Fused Deposition Modeling)',
      'SLA (Stereolithography)',
      'DLP (Digital Light Processing)',
      'SLS (Selective Laser Sintering)',
      'SLM (Selective Laser Melting)',
      'EBM (Electron Beam Melting)',
      'Material Jetting',
      'DOD (Drop On Demand)',
      'Binder Jetting',
      'MJF (Multi Jet Fusion)'],
    _materials: [
      'ABC',
      'PLA',
      'PET',
      'Nylon',
      'ASA',
      'PP',
      'PVA',
      'HIPS'],
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
      'Голубой'],
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
      '25%'],
    _quality: [
      'ultra (0.05mm)',
      'high (0.1mm)',
      'medium (0.2mm)',
      'low (0.4mm)'],
  }

  
  const DropComp = (list, value, key) => (
    <Flex direction='row'>
      <Box position='relative' flex='0 1 30%'>
        <Button border='0.15vw solid' borderColor='blackAlpha.600' colorScheme='blackAlpha' width='16vw' height='2.1vw' minWidth='100%' marginY='0.2vw' onClick={() => toggleDropdown(key)}>
          <Text fontSize='1.1vw' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>
            {selectedItem[key] || 'Выберите опцию'}
          </Text>
        </Button>
        {isOpen[key] && (
          <Box position='absolute' zIndex={1000} background='#DDDDDD' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.25)' borderRadius='4px' minWidth='100%'>
            {list.map((value, index) => (
              <Box key={index} cursor='pointer' _hover={{background:'white', color:'teal.500'}} onClick={() => handleSelect(key, value)}>
                <Text background='linear-gradient(to bottom, rgba(0,0,0,0), rgba(164,164,164,0.5))' sx={_sx.tx}> {value} </Text> 
              </Box>
            ))}
          </Box>
        )}
      </Box>
      <Spacer flex='0 1 1%'/>
      <Text sx={_sx.tx} flex='0 1 59%'> {value} </Text>
    </Flex>
  )

  const ColorPick = () => {
    const [isPaintingEnabled, setIsPaintingEnabled] = useState(false);
  
    return (
        <Flex direction='row' height='3vw'>
          <Checkbox colorScheme='blackAlpha' size='lg' onChange={() => setIsPaintingEnabled(!isPaintingEnabled)}>
            <Text sx={_sx.tx}> Покраска </Text>
          </Checkbox>
          {isPaintingEnabled && (
            <Flex direction='row' alignItems="center">
              <Spacer marginX='0.2vw'/>
              <Box flex = '0 1 6%'>
              <InputGroup>  
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="blackAlpha.700" />}
                />
                <Input type='color'/>
              </InputGroup>
              </Box>
            </Flex>
          )}
        </Flex>
    )
  }


  return (
    <ChakraProvider>
      <Flex direction='column' background='gray.100'>

        <Flex direction='column' background='white' paddingBottom='2vw' borderBottom='0.3vw solid' borderBottomRadius='2vw' borderColor='blackAlpha.500' overflow='hidden'>
          <Flex flex='0 1 100%'>
            <Box minWidth='100%' paddingX='0.1vw' background='gray.100' borderBottomRadius='1.5vw' borderBottom='0.3vw solid' borderColor='blackAlpha.500'>
              <Text fontSize='3.2vw' align='center' flex='0 1 100%' whiteSpace='nowrap' fontFamily='mondia' fontWeight='500'> Параметры печати </Text>
            </Box>
          </Flex>

          <Box><Spacer h='2vw'/></Box> 
          <Flex direction='row'>

            {/* demo */}<>
            <Flex flex='0 1 40%'>
              <Spacer flex='0 1 6%'/>
                <Flex direction='column' flex='0 1 85%'>
                  <StlViewer
                    url='models/boat.stl'
                    style={{width:'37vw', height:'37vw'}} // @ts-ignore
                    rotate={true}
                    orbitControls={true} />
                </Flex>
              <Spacer flex='0 1 1%'/>
            </Flex>
            </>

            <Flex direction='column' flex='0 1 47%' paddingLeft='2vw' background='gray.100' borderRadius='4%' borderLeft='0.3vw solid' borderColor='blackAlpha.500'>

              {/* initial */}<>
                <Spacer h='5vw'/>
                <Flex direction='row' alignItems="center">
                  <Text fontSize='2.4vw' whiteSpace='nowrap' fontStyle='italic' fontFamily='mondia'> Исходные данные </Text>
                  <Flex flex='0 1 70%'>
                    <Divider borderWidth='0.12vw' marginX='3vw' marginTop='0.6vw' borderColor='rgba(235,255,255,1)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.25)'/>
                  </Flex>
                </Flex>
                {DropComp(_options._models, 'Загрузите модель', '1')}
                {DropComp(_options._technology, 'Выбрать технологию', '2')}
                {DropComp(_options._materials, 'Выбрать материал', '3')}
                {DropComp(_options._colors, 'Выбрать цвет', '4')}
                {DropComp(_options._filling, 'Выбрать заполнение', '5')}
                {DropComp(_options._quality, 'Качество поверхности', '6')}
                {DropComp([1, 2, 3, 4, 5], 'Количество деталей', '7')}
              </>

              {/* post */}<>
                <Spacer h='1vw'/>
                <Flex direction='row' alignItems="center">
                  <Text fontSize='2.4vw' whiteSpace='nowrap' fontStyle='italic' fontFamily='mondia'> Пост обработка </Text>
                  <Flex flex='0 1 70%'>
                    <Divider borderWidth='0.12vw' marginX='3vw' marginTop='0.6vw' borderColor='rgba(235,255,255,1)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.25)'/>
                  </Flex>
                </Flex>
                  <Flex direction='row'>
                  <Checkbox colorScheme='blackAlpha' flex='0 1 15%' size='lg'> {/* sx={{span:{width:'1.2vw', height:'1.2vw'}}}> */}
                    <Text sx={_sx.tx}> Сглаживаение следов печати </Text> 
                  </Checkbox>               
                </Flex>
                <Flex direction='row'>
                  {ColorPick()}
                </Flex>
              </>

              {/* result */}<>
                <Flex flex='0 1 70%'>
                  <Divider borderWidth='0.12vw' marginRight='3vw' marginTop='1vw' borderColor='rgba(235,255,255,1)' boxShadow='0px 4px 8px rgba(0, 0, 0, 0.25)'/>
                </Flex>
                <Flex direction='row' flex='0 1 100%'>
                  <Box flex='0 1 45%'>
                    <Button border='0.15vw solid' borderColor='blackAlpha.600' colorScheme='blackAlpha' width='16vw' height='2.1vw' marginY='0.2vw' onClick={() => {}}>
                      <Text fontSize='1.1vw'> Отправить на печать </Text>
                    </Button>
                  </Box>
                  <Button border='0.15vw solid' borderColor='blackAlpha.600' colorScheme='blackAlpha' width='20vw' height='2.1vw' marginY='0.2vw' onClick={() => {}}>
                    <Text fontSize='1.1vw'> Сохранить в личном кабинете </Text>
                  </Button>
                </Flex> 
              </>

            </Flex>
          </Flex>
        </Flex>
    
        <Box h='99vw'/> 
      </Flex>
    </ChakraProvider>
)}


export default MainPage;
