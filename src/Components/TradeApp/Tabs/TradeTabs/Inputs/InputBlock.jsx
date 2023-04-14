import InputBox from './InputBox';
import InputList from './InputList';
export default function InputBlock({ label, type }) {
  return (
    <div className="flex flex-col gap-3 ">
      <label for="fname">{label}</label>
      <div className="flex gap-2">
        <InputBox />
        <InputList type={type} />
      </div>
    </div>
  );
}
