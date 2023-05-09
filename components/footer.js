import Container from "@/components/container";


export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. Wszystkie prawa zastrzeżone
      </div>
     
 
    </Container>
  );
}


