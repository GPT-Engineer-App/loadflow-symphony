import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and hiss.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats can jump up to six times their length."
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">All About Cats</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Cat Information</CardTitle>
              <CardDescription>Learn about our feline friends</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Cats are fascinating creatures that have been domesticated for thousands of years. 
                Known for their independence and playful nature, cats make wonderful companions for 
                millions of people around the world.
              </p>
              <p>
                Cats come in various breeds, each with unique characteristics and personalities. 
                From the fluffy Maine Coon to the hairless Sphynx, there's a cat breed for everyone!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cat Image</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
                alt="A cute cat" 
                className="mx-auto object-cover w-full h-[300px] rounded-lg"
              />
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Fun Cat Fact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">{catFacts[factIndex]}</p>
            <Button onClick={nextFact}>Next Fact</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
