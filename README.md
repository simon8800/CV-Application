# Resume Builder

A small application where users can input their information to generate a résumé.

## Deliverables

Things to deliever on

- [X] User can add generation information like name, email, and phone number
- [X] User can add educational experience (school name, title of study, and date of study)
- [X] User can add practical experience (company name, position title, main responsibilities of the job, date from and until when you worked for that company)
- [] User can see a preview of their résumé
- [] User can export their résumé as a PDF

## Thoughts

Ideas and questions I have during development

- How do I create reusable forms and pass in props that allow the forms to create inputs?
  - Each input needs a name, id, and input type
  - Currently using an array of input objects to populate a Form component
- Things to style
  - Font
  - Theme? I want it to be minimalistic so the user can focus on building
- How to handle multiple forms of the same type? (Experience and Education)
  - Let's just create one form for each first and then come back to figure it out... otherwise I'm not gonna get anywhere

How should I structure the state for each form???

```javascript
{
  "generalInfo": {
    "firstName": "",
    "lastName": "",
    "email": "",
    "phone": "",
  },
  "experience": {

  },

}
```

What would the components look like?

```jsx
<Resume>
  <Name />
  <Experience />
  <Education />
  <Skills />
</Resume>
```

## Implementations

Things I've put into place so far

- State:
  - Storing all inputs from general info in a single state
- Form component takes all the inputs needed as props