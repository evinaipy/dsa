import { Flex, Link, Text } from '@chakra-ui/react'
const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
const Footer = () => {
    const originalDsaSheetLink =
        'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'
    const originalAuthorLinkedInLink = 'https://in.linkedin.com/in/rajarvp'
    const gitHubLink = '/'
    const aboutLink = '../../DsaGuru.html'
    return (
        <Flex
            className={'footer'}
            bg={'footerBg'}
            w={'100vw'}
            px={5}
            py={1}
            flexGrow={'0'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            userSelect={'none'}
        >
           <button onClick={() => openInNewTab('about.html')}>
            <Text 
                fontWeight={'1g'}
                fontSize={'xs'}
                fontFamily={'customFamily'}
                fontStyle={'normal'}
                color={'defaultColor'}
                textAlign={'center'}
                w={'fit-content'}
                h={'fit-content'}
                px={4}
                py={1}
                bg={'secondaryColor'}
                borderRadius={'16px'}
            >
                <b>About 🚀</b>
                
            </Text>
            </button>
            
          
            <Link
                href={gitHubLink}
                
                _hover={{}}
                display={{ base: 'none', md: 'flex' }}
            >
                <Text
                    w={'fit-content'}
                    h={'fit-content'}
                    px={4}
                    py={1}
                    bg={'secondaryColor'}
                    borderRadius={'16px'}
                    fontWeight={'lg'}
                    fontSize={'xs'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={'defaultColor'}
                >
                    <b>Home 👨‍💻</b>
                </Text>
            </Link>
        </Flex>
    )
}

export default Footer
