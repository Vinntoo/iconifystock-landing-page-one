'use client'

import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

const optionsOne = [
  { id: 1, desc: '20 FREE assets' },
  { id: 2, desc: 'Thousands of Free Resources.' },

]
const optionsTwo = [
  { id: 1, desc: 'Quartely Subscription' },
  { id: 2, desc: 'Millions of Pro Resources' },
  { id: 3, desc: 'Unlimited Downloads' },
  { id: 3, desc: 'Full Commercial Rights' },
  { id: 3, desc: 'No Attribution Required' },
]
interface PackageTierProps {
  title: string
  options: Array<{ id: number; desc: string }>
  typePlan: string
  checked?: boolean
}
const PackageTier = ({ title, options, typePlan, checked = false }: PackageTierProps) => {
  const colorTextLight = checked ? 'white' : 'purple.600'
  const bgColorLight = checked ? 'purple.400' : 'gray.300'

  const colorTextDark = checked ? 'white' : 'purple.500'
  const bgColorDark = checked ? 'purple.400' : 'gray.300'

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}>
      <Heading size={'md'}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'}>{typePlan}</Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
          Launching Soon
        </Button>
      </Stack>
    </Stack>
  )
}
const Pricing = () => {
  return (
    <Box py={6} px={5} width="full">
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}>
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}>
            <Heading size={'lg'}>
              The Right Plan for <Text color="purple.400">Your Business</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}>
            <Text textAlign={'center'}>
            Immerse yourself in an expansive library of over 1 Million+ stunning artworks, carefully curated to suit diverse themes and styles.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={'Starter'} typePlan="Free" options={optionsOne} />
        <Divider />
        <PackageTier
          title={'Premium'}
          checked={true}
          typePlan="$50"
          options={optionsTwo}
        />
        <Divider />
        {/* <PackageTier title={'Lorem Pro'} typePlan="$50.00" options={options} /> */}
      </Stack>
    </Box>
  )
}

export default Pricing;