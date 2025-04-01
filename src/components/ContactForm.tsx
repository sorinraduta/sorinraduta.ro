export default function FormComponent() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("submit");
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        background: "red",
      }}
    >
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
