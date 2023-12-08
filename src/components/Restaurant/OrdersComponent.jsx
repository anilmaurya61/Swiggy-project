import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AllOrders from './order.json';

const OrdersContainer = styled.div`
  max-width: 100%;
`;

const OrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  padding: 12px;
  font-size: 1.5rem;
  background-color: #f2f2f2;
`;

const TableRow = styled.tr`
  text-align: center;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  font-size: 1.5rem;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 1rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const OrdersComponent = () => {
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [orders, setOrders] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    useEffect(() => {
        setOrders(AllOrders);
    }, []);

    const totalPages = Math.ceil(orders.length / pageSize);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
        setSelectedOrderId(null);
    };

    const handleStatusChange = (orderId, newStatus) => {
        setSelectedOrderId(orderId);
        setSelectedStatus(newStatus);
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.orderId === orderId ? { ...order, orderStatus: newStatus } : order
            )
        );
    };

    const startIndex = (currentPage - 1) * pageSize;
    const visibleOrders = orders.slice(startIndex, startIndex + pageSize);

    return (
        <OrdersContainer>
            <OrdersTable>
                <thead>
                    <tr>
                        <TableHeader>Order ID</TableHeader>
                        <TableHeader>Address</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Timestamp</TableHeader>
                        <TableHeader>Total Price</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {visibleOrders.map((order) => (
                        <TableRow key={order.orderId}>
                            <TableCell>{order.orderId}</TableCell>
                            <TableCell>{order.address}</TableCell>
                            <TableCell>
                                <Select
                                    value={selectedStatus}
                                    onChange={(e) => {
                                        setSelectedStatus(e.target.value);
                                    }}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                </Select>
                            </TableCell>
                            <TableCell>{order.timestamp}</TableCell>
                            <TableCell>${order.totalPrice}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </OrdersTable>

            <PaginationContainer>
                <Stack spacing={2}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                        color="secondary"
                    />
                </Stack>
            </PaginationContainer>
        </OrdersContainer>
    );
};

export default OrdersComponent;
