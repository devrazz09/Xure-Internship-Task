export const ValidateInput = (data) => {
  const { firstName, lastName, age, birthdate, address } = data;

  if(!firstName || !lastName || !age || !birthdate || !address) {
    alert("Please Fill out all the required fields")
    return false
  }

  if(isNaN(age) || age <= 0) {
    alert("Please enter a valid age")
    age = '';
    return false;
  }

  return data;
} 

