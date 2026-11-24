export default function App() {
  return (
    <>
      <FruitList />
      <UserList />
      <ProductList />
      <AvailableProducts />
      <StudentList />
    </>
  )
}

function FruitList() {
  const fruits = ['Apple', 'Banana', 'Orange']

  return (
    <ul>
      {fruits.map(fruit => (
        <li key={fruit} >{fruit}</li> 
      ))}
    </ul>
  )
}

function UserList() {
  const users = [
    {id: 1023, name: 'John', age: 39},
    {id: 3423, name: 'Bill', age: 78},
    {id: 9273, name: 'Mark', age: 41}
  ]

  return (
    <ul>{users.map(user => (
      <li key={user.id} >Name: {user.name} Age: {user.age}</li>
    ))}</ul>
  )
}

function ProductList() {
  const products = [
    {id: 3141, name: 'Milk', inStock: true},
    {id: 9375, name: 'Wings', inStock: false},
    {id: 2321, name: 'Tomatoes', inStock: false},
    {id: 8778, name: 'Pumpkin', inStock: true}
  ]

  return (
    <>
      <ul>
        {products.map(product => (
          <li key={product.id} >{product.name} {product.inStock ? 'In stock.' : 'Out of stock!'}</li>
        ))}
      </ul>
    </>
  )
}

function AvailableProducts() {
  const products = [
    { name: "brush", id: 2789, inStock: true },
    { name: "nail-polish", id: 2685, inStock: false},
    { name: "sandals", id: 8430, inStock: true},
    { name: "shirt", id: 7463, inStock: true},
    { name: "meat", id: 7356, inStock: false}
  ]

  return (
    <>
      <ul>
        {products.filter(product => product.inStock).map(product => (
          <li key={product.id} >{product.name}</li>
        ))}
      </ul>
    </>
  )
}

function StudentList() {
  const students = [
    { id: 101, name: 'Alice', grade: 92, passed: true },
    { id: 102, name: 'Bob', grade: 48, passed: false },
    { id: 103, name: 'Charlie', grade: 76, passed: true },
    { id: 104, name: 'Diana', grade: 55, passed: true },
    { id: 105, name: 'Edward', grade: 31, passed: false },
    { id: 106, name: 'Fiona', grade: 88, passed: true }
  ]
  
  return (
    <ul>
      {students.filter(student => (student.passed))
      .map(student => (
        <li key={student.id} >{student.name} - {student.grade}</li>
      ))}
    </ul>
  )
}