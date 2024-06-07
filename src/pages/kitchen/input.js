import LayoutAdmin from '@/component/layoutAdmin'
import Layout from '@/component/layout'
import KitchenHeader from '@/component/kitchen/kitchenHeader'

export default function Input() {
  return (
    <>
      <KitchenHeader />
      <section>
        {/* 부엌 조리대 */}
        <div className='py-2'>
          <h2 className='text-2xl font-bold'>Input</h2>
          <p className='mt-2 text-lg text-gray-500'>
            These are form elements this plugin styles by default.
          </p>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <label className='block'>
                <span className='text-gray-700'>Input (text)</span>
                <input
                  type='text'
                  className='form-input mt-1 block w-full input input-bordered focus:outline-primary'
                  placeholder='john@example.com'
                />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (email)</span>
                <input
                  type='email'
                  className='form-input mt-1 block w-full'
                  placeholder='john@example.com'
                />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (email, multiple)</span>
                <input
                  type='email'
                  multiple
                  className='form-input mt-1 block w-full'
                  placeholder='john@example.com'
                />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (password)</span>
                <input
                  type='password'
                  className='form-input mt-1 block w-full'
                  placeholder='john@example.com'
                />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (date)</span>
                <input type='date' className='form-input mt-1 block w-full' />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (datetime-local)</span>
                <input
                  type='datetime-local'
                  className='form-input mt-1 block w-full input input-bordered'
                />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (month)</span>
                <input type='month' className='form-input mt-1 block w-full' />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (number)</span>
                <input type='number' className='form-input mt-1 block w-full' />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (search)</span>
                <input
                  type='search'
                  className='form-input mt-1 block w-full input input-bordered'
                />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (time)</span>
                <input type='time' className='form-input mt-1 block w-full input input-bordered' />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (week)</span>
                <input type='week' className='form-input mt-1 block w-full input input-bordered' />
              </label>
            </div>
            <div className='grid grid-cols-1 gap-6'>
              <label className='block'>
                <span className='text-gray-700'>Input (tel)</span>
                <input
                  type='tel'
                  multiple
                  className='form-input mt-1 block w-full'
                  placeholder='john@example.com'
                />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (url)</span>
                <input
                  type='url'
                  multiple
                  className='form-input mt-1 block w-full'
                  placeholder='john@example.com'
                />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Select</span>
                <select className='form-select block w-full mt-1'>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </label>
              <label className='block'>
                <span className='text-gray-700'>Select (multiple)</span>
                <select className='form-multiselect block w-full mt-1' multiple>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </label>
              <label className='block'>
                <span className='text-gray-700'>Textarea</span>
                <textarea
                  className='form-textarea mt-1 block w-full h-24'
                  rows='3'
                  placeholder='Enter some long form content.'
                ></textarea>
              </label>
              <fieldset className='block'>
                <legend className='text-gray-700'>Checkboxes</legend>
                <div className='mt-2'>
                  <div>
                    <label className='inline-flex items-center'>
                      <input className='form-checkbox' type='checkbox' defaultChecked />
                      <span className='ml-2'>Option 1</span>
                    </label>
                  </div>
                  <div>
                    <label className='inline-flex items-center'>
                      <input className='form-checkbox' type='checkbox' />
                      <span className='ml-2'>Option 2</span>
                    </label>
                  </div>
                  <div>
                    <label className='inline-flex items-center'>
                      <input className='form-checkbox' type='checkbox' />
                      <span className='ml-2'>Option 3</span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset className='block'>
                <legend className='text-gray-700'>Radio Buttons</legend>
                <div className='mt-2'>
                  <div>
                    <label className='inline-flex items-center'>
                      <input
                        className='form-radio'
                        type='radio'
                        defaultChecked
                        name='radio-direct'
                        value='1'
                      />
                      <span className='ml-2'>Option 1</span>
                    </label>
                  </div>
                  <div>
                    <label className='inline-flex items-center'>
                      <input className='form-radio' type='radio' name='radio-direct' value='2' />
                      <span className='ml-2'>Option 2</span>
                    </label>
                  </div>
                  <div>
                    <label className='inline-flex items-center'>
                      <input className='form-radio' type='radio' name='radio-direct' value='3' />
                      <span className='ml-2'>Option 3</span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div className='max-w-4xl mx-auto py-12'>
          <h2 className='text-2xl font-bold'>Untouched</h2>
          <p className='mt-2 text-lg text-gray-500'>
            These are form elements we don&apos;t handle (yet?), but we use this to make sure we
            haven&apos;t accidentally styled them by mistake.
          </p>
          <div className='mt-8 grid grid-cols-2 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <label className='block'>
                <span className='text-gray-700'>Input (range)</span>
                <input type='range' className='mt-1 block w-full' />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (color)</span>
                <input type='color' className='mt-1 block w-full' />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (file)</span>
                <input type='file' className='mt-1 block w-full' />
              </label>
              <label className='block'>
                <span className='text-gray-700'>Input (file, multiple)</span>
                <input type='file' multiple className='mt-1 block w-full' />
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Input.getLayout = (page) => <Layout>{page}</Layout>
