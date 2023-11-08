interface UserExperience {
  jobTitle: string;
  years: number;
  location: string;
}

interface User {
  id: number;
  name: string;
  surname: string;
  address: string;
  studies: string[];
  age: number;
  profession: string;
  experience: UserExperience[];
  hobbies: string[];
  competencies: string[];
}

export { User };
