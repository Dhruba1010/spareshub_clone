import React, { useEffect } from 'react';
import { Box, Heading,  Text, Avatar, Grid, Link } from '@chakra-ui/react';
import ProductCard from '../Components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../Redux/Products/action';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(store => store.productReducer.data);

  useEffect(() => {
    dispatch(getProduct());
  },[dispatch])

  

  return (
    <Box mt='5rem'>
      <Box w='97%' m='auto'>
        
        <img src="https://spareshub.com/pub/media/wysiwyg/xslider-7.jpg.pagespeed.ic.BAKcTOJCz8.webp" alt="logo1" />
        {/* <img src="https://spareshub.com/pub/media/wysiwyg/xslider-1_1_.jpg.pagespeed.ic.CbiR6hPmV9.webp" alt="logo2" />
        <img src="https://spareshub.com/pub/media/wysiwyg/xslider-2.jpg.pagespeed.ic.wD4yRqPU7d.webp" alt="logo3" />
        <img src="https://spareshub.com/pub/media/wysiwyg/xslider-3.jpg.pagespeed.ic.cbnhFK_i7Q.webp" alt="logo4" />
        <img src="https://spareshub.com/pub/media/wysiwyg/xslider-4.jpg.pagespeed.ic.js2KXJ-PlY.webp" alt="logo5" /> */}
      </Box>
      <Box w='82%' m='auto' mt='2rem'>
        <Text fontSize='25px' fontWeight='700' color='#777777'>
          BROWSE BY BRANDS
        </Text>
        <Grid templateColumns='repeat(6, 1fr)' gap={6}  p='2rem' pt='1.5rem' pb='3rem' m='auto' pl='3rem' >
          <Avatar ml='1rem' size='xl' src="https://spareshub.com/pub/media/wysiwyg/xmarutisuzuki_1.png.pagespeed.ic.9zcpkCRaUE.webp" alt="l1" />
          <Avatar ml='1rem' size='xl' src="https://spareshub.com/pub/media/wysiwyg/xhundai_1.png.pagespeed.ic.BdhzVhklJm.webp" alt="l2" />
          <Avatar ml='1rem' size='xl' src="https://spareshub.com/pub/media/wysiwyg/xmahindra_1.png.pagespeed.ic.H0Q9fj69-h.webp" alt="l3" />
          <Avatar ml='1rem' size='xl' src="https://spareshub.com/pub/media/wysiwyg/xtata_2.png.pagespeed.ic.nCbNq88VZS.webp" alt="l4" />
          <Avatar ml='1rem' size='xl' src="https://spareshub.com/pub/media/wysiwyg/xtoyota_1.png.pagespeed.ic.IxoTAzW7q5.webp" alt="l5" />
          <Avatar ml='1rem' size='xl' src="https://spareshub.com/pub/media/wysiwyg/xhonda_2.png.pagespeed.ic.RqKvPjjWvt.webp" alt="l6" />
          <Avatar ml='1rem' size='xl' src="https://spareshub.com/pub/media/wysiwyg/xrenault_1.png.pagespeed.ic.5-rdnKPUGj.webp" alt="l7" />
          <Avatar ml='1rem' size='xl' src="https://spareshub.com/pub/media/wysiwyg/xnissan_2.png.pagespeed.ic.9Lv9njX03Y.webp" alt="l8" />
          <Avatar ml='1rem' size='xl' src="https://spareshub.com/pub/media/wysiwyg/xford_2.png.pagespeed.ic.yRoMho8eeQ.webp" alt="l9" />
          <Avatar ml='1rem' size='xl' src="https://spareshub.com/pub/media/wysiwyg/xvolkswagen_1.png.pagespeed.ic.xh75aPdEE-.webp" alt="l10" />
          <Avatar ml='1rem' size='xl' src="https://spareshub.com/pub/media/wysiwyg/xskoda_1.png.pagespeed.ic.GxIn_f-FMI.webp" alt="l11" />
          <Avatar ml='1rem' size='xl' src="https://spareshub.com/pub/media/wysiwyg/xchevrolet_1.png.pagespeed.ic.iMnoXvlNrz.webp" alt="l12" />
        </Grid>
      </Box>
      <Box w='82%' m='auto'>
        <Text fontSize='25px' fontWeight='700' color='#777777'>
          BEST CAR SPARE PARTS ONLINE STORE IN INDIA
        </Text>
        <Box display='flex' gap='1.5rem' m='1.5rem' ml='4rem' mr='4rem'>
          <Box >
            <Box mb='0.5rem'>
              <img src="https://spareshub.com/pub/media/wysiwyg/xstore_desc1.png.pagespeed.ic.QeIqAs1tup.webp" alt="lg1" />
            </Box>
            <img src="https://spareshub.com/pub/media/wysiwyg/xstore_desc4.png.pagespeed.ic.yv3DfZWc1W.webp" alt="lg2" />
          </Box>
          <Box>
            <Box mb='0.5rem'>
              <img src="https://spareshub.com/pub/media/wysiwyg/xstore_desc2.png.pagespeed.ic.qCLek5dY0b.webp" alt="lg3" />
            </Box>
            <img src="https://spareshub.com/pub/media/wysiwyg/xstore_desc5.png.pagespeed.ic.8b_hPnA0Rb.webp" alt="lg4" />
          </Box>
          <Box>
            <Box mb='0.5rem'>
              <img src="https://spareshub.com/pub/media/wysiwyg/xstore_desc3.png.pagespeed.ic.XC8OwhuOg9.webp" alt="lg5" />
            </Box>
            <img src="https://spareshub.com/pub/media/wysiwyg/xstore_desc6.png.pagespeed.ic.eidaIC4hNY.webp" alt="lg6" />
          </Box>
        </Box>
      </Box>
      <Box w='96%' m='auto' mt='2.5rem' mb='3rem'>
        <Text fontSize='16px' fontWeight='800' color='#777777'>
          PRODUCT_LIST
        </Text>
        
          <Grid templateColumns='repeat(5, 1fr)' gap={6}>
              {products?.map(p => {
                return (
                  <Link as={RouterLink} to={`/product/${p.id}`} key={p.id}>
                    <ProductCard  {...p} />
                  </Link>
                ) 
              })}
          </Grid>
        
      </Box>
      <Box mt='0.5rem'>
        <Box ml='1.5rem'>
          <Heading as={'h3'} color='#585858' size='lg' fontWeight='800' >
            TESTIMONIALS
          </Heading>
        </Box>
        <Box display='flex' ml='2.5rem' mr='2rem' bg='#f9f9f9' justifyContent='space-between' pt='1.5rem' pb='1.5rem' mt='1rem' mb='10rem'>
          <Box display='flex' w='33%' pl='1rem' justifyContent='space-between' pr='1rem'>
            <Box>
              <img src="https://spareshub.com/pub/media/wysiwyg/xtest1.jpg.pagespeed.ic.T3x9fg9RM3.webp" alt="avatar1" />
            </Box>
            <Box w='75%' >
              <Heading as={'h4'} color='#585858' size='md'>Meenakshi Shinde</Heading>
              <Text>
                I purchased a clutch set for my Volkswagen Vento from your website. I was happy with the parts and the service. Thanks SparesHub.
              </Text>
            </Box>
          </Box>
          <Box display='flex' w='33%' pl='1rem' justifyContent='space-between' pr='1rem'>
            <Box>
              <img src="https://spareshub.com/pub/media/wysiwyg/xtest2.jpg.pagespeed.ic.vNI_ICt75i.webp" alt="avatar2" />
            </Box>
            <Box w='75%'>
              <Heading as={'h4'} color='#585858' size='md'>Rohan Yadav</Heading>
              <Text>
                "Got my order of brake pads delivered today. First I was not sure if I should buy parts online, but my experience has been good"
              </Text>
            </Box>
          </Box>
          <Box display='flex' w='33%' pl='1rem' justifyContent='space-between' pr='1rem'>
            <Box>
              <img src="https://spareshub.com/pub/media/wysiwyg/xtest3.jpg.pagespeed.ic.M9qbtFqueD.webp" alt="avatar3" />
            </Box>
            <Box w='75%'>
              <Heading as={'h4'} color='#585858' size='md'>Dilip Londhe</Heading>
              <Text>
                Kudos to your website. I finally found the brake pads and sensors for my BMW 3 Series 2010 at a great price. :)
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home