import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
    const [prices, setPrices] = useState<any[]>([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [price, setPrice] = useState('');
    const [modifier, setModifier] = useState('');
    const [daysOfWeek, setDaysOfWeek] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]);
    const [isBlocked, setIsBlocked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin');
            return;
        }
        loadPrices(token);
    }, []);

    const loadPrices = async (token: string) => {
        try {
            const data = await api.getPrices(token);
            setPrices(data);
        } catch (error) {
            toast.error('Failed to load prices');
        }
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('adminToken');
        if (!token) return;

        try {
            await api.updatePrices(token, {
                startDate,
                endDate,
                price: Number(price),
                modifier,
                daysOfWeek,
                isBlocked,
            });
            toast.success('Prices updated successfully');
            loadPrices(token);
        } catch (error) {
            toast.error('Failed to update prices');
        }
    };

    const toggleDay = (day: number) => {
        setDaysOfWeek(prev =>
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        );
    };

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <Button variant="outline" onClick={() => {
                    localStorage.removeItem('adminToken');
                    navigate('/admin');
                }}>Logout</Button>
            </div>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Bulk Update Prices</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleUpdate} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label>Start Date</Label>
                                <Input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required />
                            </div>
                            <div>
                                <Label>End Date</Label>
                                <Input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} required />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label>Price (€)</Label>
                                <Input type="number" value={price} onChange={e => setPrice(e.target.value)} required={!isBlocked} disabled={isBlocked} />
                            </div>
                            <div>
                                <Label>Modifier (Optional, e.g. "High Season")</Label>
                                <Input type="text" value={modifier} onChange={e => setModifier(e.target.value)} disabled={isBlocked} />
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="isBlocked"
                                checked={isBlocked}
                                onCheckedChange={(checked) => setIsBlocked(checked as boolean)}
                            />
                            <Label htmlFor="isBlocked" className="text-destructive font-semibold">Block Dates (Mark as Unavailable)</Label>
                        </div>

                        <div>
                            <Label className="mb-2 block">Apply to Days</Label>
                            <div className="flex gap-4 flex-wrap">
                                {days.map((day, index) => (
                                    <div key={day} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`day-${index}`}
                                            checked={daysOfWeek.includes(index)}
                                            onCheckedChange={() => toggleDay(index)}
                                        />
                                        <label htmlFor={`day-${index}`}>{day}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button type="submit" variant={isBlocked ? "destructive" : "default"}>
                            {isBlocked ? "Block Dates" : "Update Prices"}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Current Price Rules</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="p-2">Date</th>
                                    <th className="p-2">Price</th>
                                    <th className="p-2">Status</th>
                                    <th className="p-2">Modifier</th>
                                </tr>
                            </thead>
                            <tbody>
                                {prices.slice(0, 50).map((p) => (
                                    <tr key={p.date} className="border-t">
                                        <td className="p-2">{p.date}</td>
                                        <td className="p-2">€{p.price}</td>
                                        <td className="p-2">
                                            {p.is_blocked ? (
                                                <span className="text-destructive font-bold">BLOCKED</span>
                                            ) : (
                                                <span className="text-green-600">Available</span>
                                            )}
                                        </td>
                                        <td className="p-2">{p.modifier || '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {prices.length > 50 && <p className="text-sm text-gray-500 mt-2">Showing first 50 entries...</p>}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
