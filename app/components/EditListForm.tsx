import { type List } from "@/app/utils/types";

interface EditListFormProps {
  list: List;
  setList: (list: List) => void;
  setMode: (mode: string) => void;
}

export default function EditListForm({
  list,
  setList,
  setMode
} : EditListFormProps) {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    let newTitle = formData.get('title') as string;
    let newItems: string[] = [];
    for (let i=0; i<5; i++) {
      newItems[i] = formData.get(`item${i+1}`) as string;
    }

    const newList = {
      id: list.id,
      title: newTitle,
      items: newItems
    }

    setList(newList)
    setMode('read')

    //set cookies
  }

  return (
    <form className="flex flex-col items-start gap-1 mt-3 w-full" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 w-3/4">
        <label htmlFor="title" className="text-white">Title</label>
        <input type="text" id="title" name="title" defaultValue={list.title} className="w-full pl-2 py-1 rounded-lg bg-blue-950 text-white" />
      </div>
      <div className="flex items-center gap-2 w-3/4">
        <label htmlFor="item1" className="text-white">1.</label>
        <input type="text" id="item1" name="item1" defaultValue={list.items[0]} className="w-full pl-2 py-1 rounded-lg bg-blue-950 text-white" />
      </div>
      <div className="flex items-center gap-2 w-3/4">
        <label htmlFor="item2" className="text-white">2.</label>
        <input type="text" id="item2" name="item2" defaultValue={list.items[1]} className="w-full pl-2 py-1 rounded-lg bg-blue-950 text-white" />
      </div>
      <div className="flex items-center gap-2 w-3/4">
        <label htmlFor="item3" className="text-white">3.</label>
        <input type="text" id="item3" name="item3" defaultValue={list.items[2]} className="w-full pl-2 py-1 rounded-lg bg-blue-950 text-white" />
      </div>
      <div className="flex items-center gap-2 w-3/4">
        <label htmlFor="item4" className="text-white">4.</label>
        <input type="text" id="item4" name="item4" defaultValue={list.items[3]} className="w-full pl-2 py-1 rounded-lg bg-blue-950 text-white" />
      </div>
      <div className="flex items-center gap-2 w-3/4">
        <label htmlFor="item5" className="text-white">5.</label>
        <input type="text" id="item5" name="item5" defaultValue={list.items[4]} className="w-full pl-2 py-1 rounded-lg bg-blue-950 text-white" />
      </div>
      <button className="bg-green-600 rounded-lg p-2 self-end hover:bg-green-700">
        Save
      </button>
    </form>
  )
}