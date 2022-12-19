import { Box } from 'components/Box/Box';

export const Section = ({ children }) => {
  return (
    <Box
      fontSize={2}
      display="flex"
      flexDirection="column"
      fontWeight="bold"
      p={3}
      mb={[4, 5]}
      color="black"
      as="section"
    >
      {children}
    </Box>
  );
};
