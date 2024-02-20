interface EditListFormProps {
  title: string;
  items: string[];
  setTitle: (title: string) => void;
  setItems: (items: string[]) => void;
  setMode: (mode: string) => void;
}

export default function EditListForm({
  title,
  items,
  setTitle,
  setItems,
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

    setTitle(newTitle)
    setItems(newItems)
    setMode('read')
  }

  return (
    <form className="flex flex-col items-start gap-1 mt-3 w-full" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 w-3/4">
        <label htmlFor="title" className="text-white">Title</label>
        <input type="text" id="title" name="title" defaultValue={title} className="w-full pl-2 py-1 rounded-lg bg-blue-950 text-white" />
      </div>
      <div className="flex items-center gap-2 w-3/4">
        <label htmlFor="item1" className="text-white">1.</label>
        <input type="text" id="item1" name="item1" defaultValue={items[0]} className="w-full pl-2 py-1 rounded-lg bg-blue-950 text-white" />
      </div>
      <div className="flex items-center gap-2 w-3/4">
        <label htmlFor="item2" className="text-white">2.</label>
        <input type="text" id="item2" name="item2" defaultValue={items[1]} className="w-full pl-2 py-1 rounded-lg bg-blue-950 text-white" />
      </div>
      <div className="flex items-center gap-2 w-3/4">
        <label htmlFor="item3" className="text-white">3.</label>
        <input type="text" id="item3" name="item3" defaultValue={items[2]} className="w-full pl-2 py-1 rounded-lg bg-blue-950 text-white" />
      </div>
      <div className="flex items-center gap-2 w-3/4">
        <label htmlFor="item4" className="text-white">4.</label>
        <input type="text" id="item4" name="item4" defaultValue={items[3]} className="w-full pl-2 py-1 rounded-lg bg-blue-950 text-white" />
      </div>
      <div className="flex items-center gap-2 w-3/4">
        <label htmlFor="item5" className="text-white">5.</label>
        <input type="text" id="item5" name="item5" defaultValue={items[4]} className="w-full pl-2 py-1 rounded-lg bg-blue-950 text-white" />
      </div>
      <button className="bg-green-600 rounded-lg p-2 self-end hover:bg-green-700">
        Save
      </button>
    </form>
  )
}