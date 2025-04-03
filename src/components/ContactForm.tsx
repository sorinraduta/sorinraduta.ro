export default function FormComponent() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("submit");
  };

  return (
    <div className="bg-[#060402]  rounded-t-2xl h-[860px] w-[1310px] text-white"></div>
  );
}
