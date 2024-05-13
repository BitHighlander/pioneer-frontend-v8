import { Box, Button, Heading, Text, VStack, Image, Switch, FormControl, FormLabel, useBoolean } from "@chakra-ui/react";

export function Landing() {
    // Function placeholders for button actions
    const handleExploreDapps = () => console.log("Explore Dapps clicked");
    const handleExploreBlockchains = () => console.log("Explore Blockchains clicked");
    const handleExploreAssets = () => console.log("Explore Assets clicked");
    const handleExploreNodes = () => console.log("Explore Nodes clicked");
    const handleLeaderboard = () => console.log("Leaderboard clicked");

    // State for toggling network
    const [useMainnet, setUseMainnet] = useBoolean(false);

    return (
        <Box
            display="flex"
            flexDirection={["column", "row"]}
            alignItems="center"
            justifyContent="space-between"
            p={5}
            m="auto"
            mt="10%"
            bg="#2D3748"
            color="white"
            borderRadius="lg"
            borderWidth="1px"
            overflow="hidden"
            maxW="3xl"  // Increased width
        >
            <Box flex="1" p={5}>
                <Heading mb={4}>Pioneers.dev</Heading>
                <Text as="cite" fontSize="md" mb={4}>
                    "Pioneer is a human-assisted AI project designed to chart and track the fast moving blockchain space"
                </Text>
                <VStack spacing={2} align="start" w="full">  // Reduced spacing
                    <Button w="full" size="lg" colorScheme="green" onClick={handleExploreDapps}>Explore Dapps</Button>
                    <Button w="full" size="lg" colorScheme="green" onClick={handleExploreBlockchains}>Explore Blockchains</Button>
                    <Button w="full" size="lg" colorScheme="green" onClick={handleExploreAssets}>Explore Assets</Button>
                    <Button w="full" size="lg" colorScheme="green" onClick={handleExploreNodes}>Explore Nodes</Button>
                    <Button w="full" size="lg" colorScheme="green" onClick={handleLeaderboard}>Leaderboard</Button>
                    <Box display="flex" alignItems="center">
                        <FormControl display="flex" alignItems="center" mb={2}>
                            <FormLabel htmlFor="network-toggle" mb="0" mr={2}>
                                Use Mainnet
                            </FormLabel>
                            <Switch id="network-toggle" isChecked={useMainnet} onChange={setUseMainnet.toggle} />
                        </FormControl>
                        <Button
                            colorScheme="blue"
                            size="lg"
                            ml={4}
                            leftIcon={<Image src={useMainnet ? "https://pioneers.dev/coins/ethereum.png" : "https://pioneers.dev/coins/base.png"} boxSize="20px" />}
                            onClick={() => window.open(useMainnet ? "https://nouns.build/dao/ethereum/0x25EF864904d67e912B9eC491598A7E5A066B102F" : "https://nouns.build/dao/base/0xd0d31f743d5f7e8fcf4add1bdb198f07241a4f23/2", "_blank")}
                        >
                            Become a Pioneer
                        </Button>
                    </Box>
                </VStack>
            </Box>
            <Image src="https://pioneers.dev/coins/pioneerMan.png" alt="Pioneers.dev" boxSize={["200px", "500px"]} />
        </Box>
    );
}
