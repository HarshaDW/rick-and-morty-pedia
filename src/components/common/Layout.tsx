import { Box, Container } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "gray",
          pt: 8,
          pb: 6,
        }}
      >
        <Container sx={{ backgroundColor: "gray" }} maxWidth={false}>
          {children}
        </Container>
      </Box>
    </>
  );
};

export default Layout;
