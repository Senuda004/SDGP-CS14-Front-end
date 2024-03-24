// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import Dashboard from '../Dashboard';
// import Webcam from 'react-webcam';
// import axios from 'axios';
// import { MockedProvider } from '@apollo/client/testing';
// import { GET_FOOD_DATA } from './queries';

// jest.mock('react-webcam', () => ({
//   // Mock Webcam component
//   Webcam: ({ width, height, children }) => (
//     <div style={{ width, height, backgroundColor: 'gray' }}>
//       {children({
//         getScreenshot: () => Promise.resolve('data:image/jpeg;base64,mock-data...'),
//       })}
//     </div>
//   ),
// }));

// jest.mock('axios', () => ({
//   // Mock axios.get for testing
//   get: () => Promise.resolve({ data: { data: [] } }),
// }));

// describe('Dashboard', () => {
//   it('renders correctly', async () => {
//     axios.get.mockImplementationOnce(() =>
//       Promise.resolve({
//         data: {
//           data: [
//             {
//               _id: '1',
//               Name: 'Test Product',
//               Brand: 'Test Brand',
//             },
// ],
//         },
//       })
//     );

//     const { findByRole } = render(
//       <MockedProvider mocks={[]} addTypename={false}>
//         <Dashboard />
//       </MockedProvider>
//     );

//     const table = await findByRole('table');
//     expect(table).toBeInTheDocument();

//     const row = await findByRole('row');
//     expect(row).toBeInTheDocument();

//     const cell = await findByRole('cell');
//     expect(cell).toBeInTheDocument();

//     const nameCell = await findByRole('cell', { name: 'Name' });
//     expect(nameCell).toBeInTheDocument();

//     const brandCell = await findByRole('cell', { name: 'Brand' });
//     expect(brandCell).toBeInTheDocument();
//   });

//   it('should render the camera without crashing', () => {
//     render(
//       <MockedProvider mocks={[]} addTypename={false}>
//         <Dashboard />
//       </MockedProvider>
//     );

//     expect(screen.getByLabelText('Webcam Feed')).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: 'Take Photo' })).toBeInTheDocument();
//     expect(screen.queryByText('Captured Photo')).not.toBeInTheDocument();
//     expect(screen.queryByText(/Identified item:/i)).not.toBeInTheDocument();
//   });

//   it('should render the captured photo', async () => {
//     axios.get.mockImplementation(() =>
//       Promise.resolve({
//         data: {
//           data: [
//             {
//               _id: '1',
//               Name: 'Test Product',
//               Brand: 'Test Brand',
//             },
//           ],
//         },
//       })
//     );

//     const { findByTestId, getByRole } = render(
//       <MockedProvider mocks={[]} addTypename={false}>
//         <Dashboard />
//       </MockedProvider>
//     );

//     const cameraButton = getByRole('button', { name: 'Take Picture' });
//     fireEvent.click(cameraButton);

//     await findByTestId('screenshot');
//     expect(getByRole('button', { name: 'Retake Picture' })).toBeInTheDocument();
//     expect(getByRole('button', { name: 'Proceed' })).toBeInTheDocument();

//     const capturedPhoto = await findByTestId('captured-photo');
//     expect(capturedPhoto).toBeInTheDocument();
//     expect(capturedPhoto.querySelector('img')).toHaveAttribute(
//       'src',
//       'data:image/jpeg;base64,mock-data...'
//     );

//     const image = await findByTestId('identified-item-image');
//     expect(image).toBeInTheDocument();
//     expect(image.src).toBe('');

//     const identifiedItemText = await findByTestId('identified-item-text');
//     expect(identifiedItemText).toBeInTheDocument();
//     expect(identifiedItemText.textContent).toBe('');
//   });

//   it('should render identified item', async () => {
//     axios.get.mockImplementation(() =>
//       Promise.resolve({
//         data: {
//           data: [
//             {
//               _id: '1',
//               Name: 'Test Product',
//               Brand: 'Test Brand',
//             },
//           ],
//         },
//       })
//     );

//     const { findByTestId, getByRole } = render(
//       <MockedProvider mocks={[]} addTypename={false}>
//         <Dashboard />
//       </MockedProvider>
//     );

//     const cameraButton = getByRole('button', { name: 'Take Picture' });
//     fireEvent.click(cameraButton);

//     const identifiedItemText = await findByTestId('identified-item-text', {
//       exact: false,
//       hidden: true,
//     });
//     expect(identifiedItemText).not.toBeInTheDocument();

//     const identifiedItemImage = await findByTestId('identified-item-image', {
//       exact: false,
//       hidden: true,
//     });
//     expect(identifiedItemImage).not.toBeInTheDocument();

//     fireEvent.click(getByRole('button', { name: 'Identify' }));

//     const identifiedItemText2 = await findByTestId('identified-item-text', {
//       exact: false,
//       hidden: true,
//     });
//     expect(identifiedItemText2).toBeInTheDocument();
//     expect(identifiedItemText2.textContent).toBe('Test Product');

//     const identifiedItemImage2 = await findByTestId('identified-item-image', {
//       exact: false,
//       hidden: true,
//     });
//     expect(identifiedItemImage2).toBeInTheDocument();
//     expect(identifiedItemImage2.src).toBe('');
//   });
// });